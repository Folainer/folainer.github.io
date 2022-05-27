#include "variables.hpp"
#include "linkedList.hpp"
#include "startGame.hpp"

using Variables::Bomb;
using Variables::bombs;
using Variables::Jet;
using Variables::jets;
using Variables::Missile;
using Variables::missiles;

Texture texture;
Texture missileTexture;
Texture towerTexture;
Texture jetTexture;
Texture heartIconTexture;
Texture jetIconTexture;
Font font;
Music jetSound;
Texture bombTexture;
Music explosionJetSound;

//ініціалізація ресурсів
void initStartGame()
{
    texture.loadFromFile("Img/grass.png");
    missileTexture.loadFromFile("Img/missile.png");
    towerTexture.loadFromFile("Img/tower.png");
    jetTexture.loadFromFile("Img/jet2.png");
    heartIconTexture.loadFromFile("Img/heart.png");
    jetIconTexture.loadFromFile("Img/jet1.png");
    font.loadFromFile("Fonts/Roboto/Roboto-Regular.ttf");
    jetSound.openFromFile("Audio/jetSound.ogg");
    jetSound.setVolume(50);
    bombTexture.loadFromFile("Img/bomb.png");
    explosionJetSound.openFromFile("Audio/explosionJet.ogg");
    explosionJetSound.setVolume(80);
}

//функція гри
void startGame(RenderWindow &window)
{
    //отримання розміру екрану
    auto Size = window.getSize();
    int screenWidth = Size.x;
    int screenHeight = Size.y;
    int seconds = (double)(Variables::currentGameTime - Variables::startGameTime);

    //створення винищувача випадковістю
    bool needCreateJet = ((rand() % (int)(8000.0f / (0.03f * seconds / CLOCKS_PER_SEC + 10))) == 0) ? true : false;
    if (needCreateJet)
    {
        if (jets == NULL)
        {
            Variables::endJet = jets = initJet(Variables::currentGameTime, screenWidth / 2.f, rand() % (screenHeight / 2));
        }
        else
        {
            Variables::endJet = addJet(Variables::endJet, Variables::currentGameTime, screenWidth / 2.f, rand() % (screenHeight / 2));
        }
        if (jetSound.getStatus() != 2)
        {
            jetSound.stop();
            jetSound.play();
        }
    }

    //малювання бомби + гравітація для бомби
    Bomb *currentBomb = bombs;
    while (currentBomb != NULL)
    {
        Sprite bomb(bombTexture);
        bomb.setPosition(Vector2f(screenWidth / 2.f, currentBomb->y + 24.f));
        window.draw(bomb);
        currentBomb->y += 2.5f;
        currentBomb = currentBomb->link;
    }

    //малювання винищувачів + перевірка їх на зіткнення з ракетою
    Jet *currentJet = jets;
    Jet *prevJet = NULL;
    Missile *currentMissile;
    Missile *prevMissile;
    while (currentJet != NULL)
    {
        //малювання винищувачів
        Sprite jet(jetTexture);
        jet.setPosition(Vector2f((float)(currentJet->x) + screenWidth / 2.0f, (float)(currentJet->y)));
        jet.setScale(Vector2f(0.45f, 0.45f));
        //зкидання бомби на конкретних координатах
        if (currentJet->x >= -2.f && currentJet->x < .0f)
        {
            if (bombs == NULL)
            {
                Variables::endBomb = bombs = initBomb(currentJet->y + 15.f);
            }
            else
            {
                Variables::endBomb = addBomb(Variables::endBomb, currentJet->y + 15.f);
            }
        }
        window.draw(jet);
        //рух винищувача
        currentJet->x -= 2;

        currentMissile = missiles;
        prevMissile = NULL;
        while (currentMissile != NULL)
        {
            //задання стилів ракетів
            Sprite missile(missileTexture);
            missile.setPosition(Vector2f((float)(currentMissile->x) + (float)(Variables::screenWidth / 2.f) - 25.6f, (float)(currentMissile->y) - 25.6f + (float)Variables::screenHeight - 180.f));
            missile.setScale(Vector2f(0.2f, 0.2f));
            missile.setOrigin(Vector2f(100.f, 100.f));
            missile.setRotation(currentMissile->angle + 90);
            missile.move(Vector2f(25.6f, 25.6f));
            //зіткнення ракети з винищувачем
            if (missile.getGlobalBounds().intersects(jet.getGlobalBounds()))
            {
                Variables::jetNumber++;
                removeMissile(&missiles, currentMissile, prevMissile);
                removeJet(&jets, currentJet, prevJet);
                explosionJetSound.stop();
                explosionJetSound.play();
            }
            prevMissile = currentMissile;
            currentMissile = currentMissile->link;
        }
        prevJet = currentJet;
        currentJet = currentJet->link;
    }

    currentMissile = missiles;

    //малювання ракет
    while (currentMissile != NULL)
    {
        Sprite missile(missileTexture);
        missile.setPosition(Vector2f((float)(currentMissile->x) + (float)(Variables::screenWidth / 2.f) - 25.6f, (float)(currentMissile->y) - 25.6f + (float)Variables::screenHeight - 180.f));
        missile.setScale(Vector2f(0.2f, 0.2f));
        missile.setOrigin(Vector2f(100.f, 100.f));
        missile.setRotation(currentMissile->angle + 90);
        missile.move(Vector2f(25.6f, 25.6f));
        window.draw(missile);
        currentMissile->x += 5 * cos(fabs(Variables::angle / 180 * PI));
        currentMissile->y -= 5 * sin(fabs(Variables::angle / 180 * PI));
        currentMissile = currentMissile->link;
    }

    //малювання землі
    ConvexShape ground;
    ground.setPointCount(4);
    ground.setPoint(0, Vector2f(0.f, (float)screenHeight));
    ground.setPoint(1, Vector2f(0.f, (float)screenHeight - 70.f));
    ground.setPoint(2, Vector2f((float)screenWidth, (float)screenHeight - 70.f));
    ground.setPoint(3, Vector2f((float)screenWidth, (float)screenHeight));
    ground.setFillColor(Color(169, 131, 82, 255));
    window.draw(ground);

    //малювання трави
    for (int i = 0; i < screenWidth / 31; i++)
    {
        Sprite sprite(texture);
        sprite.setPosition(Vector2f((float)(i * 32), screenHeight - 85.f));
        window.draw(sprite);
    }

    //малювання прицілу
    ConvexShape line;
    line.setPointCount(4);
    line.setPoint(0, Vector2f(0.f, 0.f));
    line.setPoint(1, Vector2f(0.f, 2.f));
    line.setPoint(2, Vector2f((float)screenWidth, 2.f));
    line.setPoint(3, Vector2f((float)screenWidth, 0.f));
    line.setFillColor(Color(46, 255, 149, 255));
    line.setPosition(Vector2f((float)screenWidth / 2.f, (float)screenHeight - 70.f - 100.f));
    line.setRotation(Variables::angle);
    window.draw(line);

    //малювання башні
    Sprite tower(towerTexture);
    tower.setPosition(Vector2f((float)(screenWidth - 128) / 2.f, (float)screenHeight - 70.f - 120.f));
    window.draw(tower);

    /*малювання інтерфейсу*/

    //малювання кілкосиі збитих винищувачів
    char numberString[10];
    int padding = 0;
    sprintf(numberString, "%d", Variables::jetNumber);
    Text jetNumberText(numberString, font, 48);
    jetNumberText.setStyle(Text::Bold);
    jetNumberText.setPosition(Vector2f(20.f, 20.f));
    auto numberBox = jetNumberText.getLocalBounds();
    padding += numberBox.width + 10.f;
    window.draw(jetNumberText);

    //малювання іконки винищувача
    Sprite jetIcon(jetIconTexture);
    jetIcon.setScale(Vector2f(.7f, .7f));
    jetIcon.setPosition(Vector2f(20.0f + padding, 20.0f + 8.0f));
    numberBox = jetIcon.getLocalBounds();
    padding += numberBox.width + 10.f;
    window.draw(jetIcon);

    //малювання кількісті сердець
    sprintf(numberString, "%d", Variables::hearts);
    Text heartText(numberString, font, 48);
    heartText.setStyle(Text::Bold);
    heartText.setPosition(Vector2f(20.f + padding, 20.f));
    numberBox = heartText.getLocalBounds();
    padding += numberBox.width + 10.f;
    window.draw(heartText);

    //малювання іконки серця
    Sprite heartIcon(heartIconTexture);
    heartIcon.setScale(Vector2f(.35f, .35f));
    heartIcon.setPosition(Vector2f(20.0f + padding, 20.0f + 8.0f));
    window.draw(heartIcon);

    //малювання кількісті fps
    sprintf(numberString, "%dfps", Variables::fps);
    Text fpsText(numberString, font, 48);
    fpsText.setStyle(Text::Bold);
    numberBox = fpsText.getLocalBounds();
    fpsText.setPosition(Vector2f((float)(screenWidth - numberBox.width - 20.f), 20.f));
    window.draw(fpsText);
}

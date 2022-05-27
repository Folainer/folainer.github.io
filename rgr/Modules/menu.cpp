#include "variables.hpp"
#include "menu.hpp"

using Variables::menuHeight;
using Variables::menuWidth;

//функція меню
void openMenu(RenderWindow &window)
{
    //отримання розміру екрану
    auto Size = window.getSize();
    int screenWidth = Size.x;
    int screenHeight = Size.y;

    //малювання контейнер меню
    ConvexShape menu;
    menu.setPointCount(4);
    menu.setPoint(0, Vector2f((float)(screenWidth - menuWidth) / 2, (float)(screenHeight - menuHeight) / 2));
    menu.setPoint(1, Vector2f((float)(screenWidth - menuWidth) / 2, (float)(screenHeight + menuHeight) / 2));
    menu.setPoint(2, Vector2f((float)(screenWidth + menuWidth) / 2, (float)(screenHeight + menuHeight) / 2));
    menu.setPoint(3, Vector2f((float)(screenWidth + menuWidth) / 2, (float)(screenHeight - menuHeight) / 2));
    menu.setFillColor(Color(239, 172, 67, 255));
    window.draw(menu);

    //малювання кнопки грати
    Font font;
    font.loadFromFile("Fonts/Roboto/Roboto-Regular.ttf");

    Text playText(L"Грати", font, 48);
    playText.setStyle(Text::Bold);
    FloatRect textRect = playText.getLocalBounds();
    playText.setOrigin(textRect.width / 2, textRect.height / 2);
    playText.setPosition(Vector2f(screenWidth / 2.0f, (screenHeight - menuHeight) / 2.0f + 45.f));
    window.draw(playText);

    //малювання темного вікна, коли курсор наведений на клавішу 'грати'
    if (Variables::isPlayFocus)
    {
        ConvexShape playRect;
        playRect.setPointCount(4);
        playRect.setPoint(0, Vector2f((float)screenWidth / 2.f - 80.f, (float)(screenHeight - menuHeight) / 2 + 20.f));
        playRect.setPoint(1, Vector2f((float)screenWidth / 2.f - 80.f, (float)(screenHeight - menuHeight) / 2 + 100.0f));
        playRect.setPoint(2, Vector2f((float)screenWidth / 2.f + 80.f, (float)(screenHeight - menuHeight) / 2 + 100.0f));
        playRect.setPoint(3, Vector2f((float)screenWidth / 2.f + 80.f, (float)(screenHeight - menuHeight) / 2 + 20.f));
        playRect.setFillColor(Color(0, 0, 0, 50));
        window.draw(playRect);
    }

    //відображення найкращого результату
    Text bestResultText(L"Найкращий результат:", font, 24);
    bestResultText.setStyle(Text::Bold);
    textRect = bestResultText.getLocalBounds();
    bestResultText.setOrigin(textRect.width / 2, textRect.height / 2);
    bestResultText.setPosition(Vector2f(screenWidth / 2.0f, (screenHeight - menuHeight) / 2.0f + 120.f));
    window.draw(bestResultText);

    char resText[20];
    sprintf(resText, "%d", Variables::res);

    //відображення значення найкращого результату
    Text scoreText(resText, font, 36);
    scoreText.setStyle(Text::Bold);
    textRect = scoreText.getLocalBounds();
    scoreText.setOrigin(textRect.width / 2, textRect.height / 2);
    scoreText.setPosition(Vector2f(screenWidth / 2.0f, (screenHeight - menuHeight) / 2.0f + 180.f));
    window.draw(scoreText);
}

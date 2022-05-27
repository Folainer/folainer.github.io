#include <SFML/Graphics.hpp>
#include <SFML/Audio.hpp>
#include <windows.h>
#include <time.h>
#include <math.h>
#include "Modules/variables.hpp"
#include "Modules/menu.hpp"
#include "Modules/startGame.hpp"
#include "Modules/linkedList.hpp"
#include <dirent.h>
#include <string.h>

using namespace sf;
using namespace Variables;

int main()
{
    //перевірка наявності файла result.dat
    DIR *dir = opendir(".");
    bool isResultDat = false;
    struct dirent *dirent;
    while (dirent = readdir(dir))
    {
        if (strcmp(dirent->d_name, "result.dat") == 0)
        {
            isResultDat = true;
            break;
        }
    }

    //створення файла з найкращим результатом гри при його відсутності, потім відкриває його
    FILE *file;
    if (isResultDat)
    {
        file = fopen("result.dat", "rb");
    }
    else
    {
        file = fopen("result.dat", "wb");
        fseek(file, 0, SEEK_SET);
        fwrite(&res, 1, sizeof(int), file);
        freopen("result.dat", "rb", file);
    }

    FreeConsole();
    srand(time(NULL));
    RenderWindow window(VideoMode(1280, 720), L"Збий винищувача!");
    isMenuOpen = true;
    View view = window.getDefaultView();
    res = 0;

    //підключення деяких відеофайлів
    Music missileLaunch;
    missileLaunch.openFromFile("Audio/missileLaunch.ogg");
    missileLaunch.setVolume(50);
    Music explosionSound;
    explosionSound.openFromFile("Audio/explosionSound.ogg");
    explosionSound.setVolume(40);

    //читання з файлу найкращого результата гри
    fread(&res, 1, sizeof(int), file);
    freopen("result.dat", "w", file);
    cadr = 0;
    currentFps = 0;
    fps = 120;

    //головний цикл програми
    while (window.isOpen())
    {
        currentGameTime = clock();
        if (crusialGameTime == 0)
        {
            crusialGameTime = clock();
        }

        if (fpsGameTime == 0)
        {
            fpsGameTime = clock();
        }

        //кожну секунду оновлюється кількість кадрів у секунду (fps)
        if ((float)(currentGameTime - fpsGameTime) >= 1000)
        {
            fpsGameTime = currentGameTime;
            fps = currentFps;
            currentFps = 0;
        }

        //втановлення максимальної частоти кадрів 120fps
        if ((float)(currentGameTime - crusialGameTime) >= 1000 / 120)
        {
            //оновлення поточнчого часу програми в тактах
            crusialGameTime = currentGameTime;
            //отримання ширина та висоти екрану
            auto Size = window.getSize();
            screenWidth = Size.x;
            screenHeight = Size.y;

            //цикл, який проходить по всіх подіях
            Event event;
            while (window.pollEvent(event))
            {
                //подія закриття вікна
                if (event.type == Event::Closed)
                    window.close();

                //подія змін розміру вікна
                if (event.type == Event::Resized)
                {
                    //вікно не може бути більше ніж 1280 пікселів у висоту і 720 пікселів у висоту
                    Vector2u Size = window.getSize();
                    if ((float)event.size.width < 1280)
                    {
                        Size.x = 1280;
                        window.setSize(Size);
                    }
                    else if ((float)event.size.height < 720)
                    {
                        Size.y = 720;
                        window.setSize(Size);
                    }
                    else
                    {
                        view.setSize((float)event.size.height, (float)event.size.width);
                        view.reset(FloatRect(0.f, 0.f, (float)(Size.x), (float)(Size.y)));
                    }
                }
                //подія натиску конопки
                if (event.type == Event::KeyPressed)
                {
                    //стрілка вправо
                    if (event.key.code == KEY_RIGHT)
                    {
                        //стрілка повертає приціл якщо менше нуль градусів
                        if (angle < 0)
                        {
                            angle += 0.5;
                        }
                    }
                    //стрілка вліво
                    if (event.key.code == KEY_LEFT)
                    {
                        //стрілка повертає приціл якщо більшу -180 градусів
                        if (angle > -180)
                        {
                            angle -= 0.5;
                        }
                    }
                    //кнопка ентер
                    //коли меню відкрити при натиску клавіші меню закривається
                    if (isMenuOpen && event.key.code == KEY_ENTER)
                    {
                        isMenuOpen = false;
                    }
                    //кнопка пробілу
                    if (!isMenuOpen && event.key.code == KEY_SPACE)
                    {
                        //ініціаліується першка ракета не раіншу 700 мс
                        if (missiles == NULL)
                        {
                            if ((float)(currentGameTime - lastMissileTime) > 700)
                            {
                                missiles = initMissile(currentGameTime, 0, 0, (float)angle);
                                //звукові ефекти
                                missileLaunch.stop();
                                missileLaunch.play();
                                lastMissileTime = currentGameTime;
                            }
                        }
                        else
                        {
                            //створюється ракета не раіншу 700 мс
                            if ((float)(currentGameTime - lastMissileTime) > 700)
                            {
                                endMissile = addMissile(missiles, currentGameTime, 0, 0, (float)angle);
                                //звукові ефекти
                                missileLaunch.stop();
                                missileLaunch.play();
                                lastMissileTime = currentGameTime;
                            }
                        }
                    }
                }
                //подія руху мишки
                if (isMenuOpen && event.type == Event::MouseMoved)
                {
                    //якщо миша наведена на грати, то виникає фокус інакше зникає
                    if (event.mouseMove.x > (float)screenWidth / 2.f - 80.f && event.mouseMove.x < (float)screenWidth / 2.f + 80.f && event.mouseMove.y > (float)(screenHeight - menuHeight) / 2 + 20.f && event.mouseMove.y < (float)(screenHeight - menuHeight) / 2 + 100.0f)
                    {
                        isPlayFocus = true;
                    }
                    else
                    {
                        isPlayFocus = false;
                    }
                }
                //подія натиснення на кнопку миші
                if (isMenuOpen && isPlayFocus && event.type == Event::MouseButtonPressed)
                {
                    //при фокусі меню закривається та розпочинається гра
                    if (event.key.code == 0)
                    {
                        isMenuOpen = false;
                    }
                }
                window.setView(view);
            }
            if (missiles != NULL)
            {
                //кожні 8 секунд видалється ракета, щоб не навантажувати процесор та зменшити кількість використаної пам'яті
                if ((float)(currentGameTime - missiles->existTime) > 8000)
                {
                    Missile *copy = missiles;
                    missiles = missiles->link;
                    free(copy);
                }
            }
            if (jets != NULL)
            {
                //якщо винищувач залишає поле зору у вікні, то він видаляється
                if (jets->x < -screenWidth / 2.f - 64.f)
                {
                    Jet *copy = jets;
                    jets = jets->link;
                    free(copy);
                }
            }
            if (bombs != NULL)
            {
                //якщо бомба долетіла до цілі, то вона зривається
                if (bombs->y > screenHeight - 120.f)
                {
                    explosionSound.stop();
                    explosionSound.play();
                    Bomb *copy = bombs;
                    bombs = bombs->link;
                    free(copy);
                    //якщо сердечка закінчилися, то кінець гри
                    if (hearts > 1)
                    {
                        hearts--;
                    }
                    else
                    {
                        if (jetNumber > res)
                        {
                            res = jetNumber;
                        }
                        isMenuOpen = true;
                        hearts = 10;
                        jetNumber = 0;
                        if (jets != NULL)
                        {
                            jets = NULL;
                        }
                        if (missiles != NULL)
                        {
                            missiles = NULL;
                        }
                        if (bombs != NULL)
                        {
                            bombs = NULL;
                        }
                    }
                }
            }
            //встановлює синій колір неба
            window.clear(Color(153, 212, 249, 0));
            //в залежності від відкритості вікна виконується різні функції
            if (isMenuOpen)
            {
                openMenu(window);
            }
            else
            {
                if (startGameTime == 0)
                {
                    initStartGame();
                    startGameTime = currentGameTime;
                    lastMissileTime = currentGameTime;
                }
                startGame(window);
            }
            window.display();
            cadr++;
            currentFps++;
        }
    }
    //запис результатів у бінарний файл
    fseek(file, 0, SEEK_SET);
    fwrite(&res, sizeof(int), 1, file);
    fclose(file);
    return 0;
}
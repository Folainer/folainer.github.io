#include <SFML/Graphics.hpp>
#include "modules/variables.hpp"
#include "modules/coordinateSystem.hpp"
#include "modules/interface.hpp"
#include "modules/function.hpp"
#include <Windows.h>
#include <time.h>

using namespace sf;
using namespace Variables;

int main()
{
    FreeConsole();

    RenderWindow window(VideoMode(screenWidth, screenHeight), L"Побудова графіків");
    Vector2u screenSize;

    View view;

    initdrawCordinates();
    initInterface();

    Image icon;
    icon.loadFromFile("img/graphic.png");
    const Uint8 *iconUint8 = icon.getPixelsPtr();
    window.setIcon(64, 64, iconUint8);

    Image cursorImage;
    cursorImage.loadFromFile("img/cursor.png");
    const Uint8 *cursorUint8 = cursorImage.getPixelsPtr();
    Cursor cursor;
    cursor.loadFromPixels(cursorUint8, Vector2u(32, 32), Vector2u(0, 0));
    window.setMouseCursor(cursor);

    while (window.isOpen())
    {
        currentTime = clock();
        if ((float)(currentTime - lastFpsTime) >= 1000.f)
        {
            lastFpsTime = currentTime;
            fps = currentFps;
            currentFps = 0;
        }
        if ((float)(currentTime - lastFlipTime) >= 1000.f / 60.f)
        {
            currentFps++;
            lastFlipTime = currentTime;
            screenSize = window.getSize();
            screenHeight = screenSize.y;
            screenWidth = screenSize.x;
            view.setSize(screenWidth, screenHeight);
            view.setCenter(screenSize.x / 2.f, screenSize.y / 2.f);

            Event event;
            while (window.pollEvent(event))
            {
                if (event.type == Event::Closed)
                {
                    window.close();
                }
                if (event.type == Event::Resized)
                {
                }
                if (event.type == Event::MouseMoved)
                {
                    cursorX = event.mouseMove.x;
                    cursorY = event.mouseMove.y;
                }
                if (event.type == Event::KeyPressed)
                {
                    if (event.key.code == KEY_PLUS)
                    {
                        if (scaleIndex > 0)
                        {
                            scale /= 2.5f;
                            scaleIndex--;
                        }
                    }
                    if (event.key.code == KEY_MINUS)
                    {
                        if (scaleIndex < 30)
                        {
                            scale *= 2.5f;
                            scaleIndex++;
                        }
                    }
                    if (event.key.code == KEY_LEFT)
                    {
                        if (n > 0)
                        {
                            n--;
                        }
                    }
                    if (event.key.code == KEY_RIGHT)
                    {
                        n++;
                    }
                    if (event.key.code == KEY_UP)
                    {
                        a += .25f;
                    }
                    if (event.key.code == KEY_DOWN)
                    {
                        a -= .25f;
                    }
                }
            }
            window.setView(view);

            window.clear(Color(255, 255, 255));

            drawCordinates(window);
            drawFunction(window, a, n);
            drawInterface(window, a, n);

            window.display();
        }
    }
    return 0;
}
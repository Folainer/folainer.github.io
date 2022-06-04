#include "coordinateSystem.hpp"

Texture arrowTexture;
char divisionString[25];

void initdrawCordinates()
{
    arrowTexture.loadFromFile("img/arrow.png");
    arrowTexture.setSmooth(true);
    arialRounded.loadFromFile("fonts/ARLRDBD.TTF");
}

void drawCordinates(RenderWindow &window)
{
    RectangleShape lineOX(Vector2f(screenWidth, 1.f));
    lineOX.setFillColor(Color(175, 175, 175));
    lineOX.setOrigin(Vector2f(screenWidth / 2.f, .5f));
    for (int i = 1; i < screenHeight / 150.f; i++)
    {
        lineOX.setPosition(screenWidth / 2.f, i * 75.f + screenHeight / 2.f);
        window.draw(lineOX);
        lineOX.setPosition(screenWidth / 2.f, -i * 75.f + screenHeight / 2.f);
        window.draw(lineOX);
    }
    RectangleShape lineOY(Vector2f(1.f, screenHeight));
    lineOY.setFillColor(Color(175, 175, 175));
    lineOY.setOrigin(Vector2f(0.5, screenHeight / 2.f));
    for (int i = 1; i < screenWidth / 150.f; i++)
    {
        lineOY.setPosition(screenWidth / 2.f + i * 75.f, screenHeight / 2.f);
        window.draw(lineOY);
        lineOY.setPosition(screenWidth / 2.f - i * 75.f, screenHeight / 2.f);
        window.draw(lineOY);
    }

    RectangleShape axisOX(Vector2f(screenWidth, 2.f));
    axisOX.setPosition(Vector2f(0, screenHeight / 2.f));
    axisOX.setFillColor(Color(10, 10, 10));
    window.draw(axisOX);

    RectangleShape axisOY(Vector2f(2.f, screenHeight));
    axisOY.setPosition(Vector2f(screenWidth / 2.f, 0));
    axisOY.setFillColor(Color(10, 10, 10));
    window.draw(axisOY);

    Sprite arrow(arrowTexture);
    arrow.setOrigin(8.f, 8.f);
    arrow.setPosition(screenWidth - 6.f, screenHeight / 2.f);
    window.draw(arrow);
    arrow.setPosition(screenWidth / 2.f, 6.f);
    arrow.setRotation(270.f);
    window.draw(arrow);

    Text divisionText;
    divisionText.setFillColor(Color(0, 0, 0));
    divisionText.setFont(arialRounded);
    divisionText.setCharacterSize(14);
    for (int i = 1; i < screenWidth / 150.f - .2f; i++)
    {
        toString(divisionString, scales[scaleIndex] * i);
        divisionText.setString(divisionString);
        FloatRect divisionTextSize = divisionText.getLocalBounds();
        divisionText.setPosition(screenWidth / 2.f + i * 75.f - divisionTextSize.width / 2.f - 2.f, screenHeight / 2.f + 8.f);
        window.draw(divisionText);

        toString(divisionString, -scales[scaleIndex] * i);
        divisionText.setString(divisionString);
        divisionTextSize = divisionText.getLocalBounds();
        divisionText.setPosition(screenWidth / 2.f - i * 75.f - divisionTextSize.width / 2.f - 2.f, screenHeight / 2.f + 8.f);
        window.draw(divisionText);
    }
    for (int i = 1; i < screenHeight / 150.f - .2f; i++)
    {
        toString(divisionString, -scales[scaleIndex] * i);
        divisionText.setString(divisionString);
        FloatRect divisionTextSize = divisionText.getLocalBounds();
        divisionText.setPosition(screenWidth / 2.f + 8.f, screenHeight / 2.f + i * 75.f - divisionTextSize.height / 2.f - 3.f);
        window.draw(divisionText);

        toString(divisionString, scales[scaleIndex] * i);
        divisionText.setString(divisionString);
        divisionTextSize = divisionText.getLocalBounds();
        divisionText.setPosition(screenWidth / 2.f + 8.f, screenHeight / 2.f - i * 75.f - divisionTextSize.height / 2.f - 3.f);
        window.draw(divisionText);
    }

    Text xText("X", arialRounded);
    xText.setPosition(screenWidth - 30.f, screenHeight / 2.f + 10.f);
    xText.setFillColor(Color(0, 0, 0));
    window.draw(xText);

    Text yText("Y", arialRounded);
    yText.setPosition(screenWidth / 2.f - 30.f, 0.f);
    yText.setFillColor(Color(0, 0, 0));
    window.draw(yText);
}
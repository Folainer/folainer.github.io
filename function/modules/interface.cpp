#include "interface.hpp"

Font robotoRegular;

char fpsString[10];
char paramString[20];
char alphaString[10];
char cursorXString[10];
char cursorYString[10];

void initInterface()
{
    arialRounded.loadFromFile("fonts/ARLRDBD.TTF");
    robotoRegular.loadFromFile("fonts/Roboto-Regular.ttf");
}

void drawInterface(RenderWindow &window, float a, int n)
{
    if (scales[scaleIndex] >= 20.f)
    {
        sprintf(fpsString, "%dFPS  X:%.0f  Y:%.0f", fps, (cursorX - screenWidth / 2.f) * scales[scaleIndex] / 75.f, -(cursorY - screenHeight / 2.f) * scales[scaleIndex] / 75.f);
    }
    else if (scales[scaleIndex] >= 5.f)
    {
        sprintf(fpsString, "%dFPS  X:%.1f  Y:%.1f", fps, (cursorX - screenWidth / 2.f) * scales[scaleIndex] / 75.f, -(cursorY - screenHeight / 2.f) * scales[scaleIndex] / 75.f);
    }
    else if (scales[scaleIndex] >= 0.5f)
    {
        sprintf(fpsString, "%dFPS  X:%.2f  Y:%.2f", fps, (cursorX - screenWidth / 2.f) * scales[scaleIndex] / 75.f, -(cursorY - screenHeight / 2.f) * scales[scaleIndex] / 75.f);
    }
    else if (scales[scaleIndex] >= 0.05f)
    {
        sprintf(fpsString, "%dFPS  X:%.3f  Y:%.3f", fps, (cursorX - screenWidth / 2.f) * scales[scaleIndex] / 75.f, -(cursorY - screenHeight / 2.f) * scales[scaleIndex] / 75.f);
    }
    else if (scales[scaleIndex] >= 0.005f)
    {
        sprintf(fpsString, "%dFPS  X:%.4f  Y:%.4f", fps, (cursorX - screenWidth / 2.f) * scales[scaleIndex] / 75.f, -(cursorY - screenHeight / 2.f) * scales[scaleIndex] / 75.f);
    }
    else if (scales[scaleIndex] >= 0.0005f)
    {
        sprintf(fpsString, "%dFPS  X:%.5f  Y:%.5f", fps, (cursorX - screenWidth / 2.f) * scales[scaleIndex] / 75.f, -(cursorY - screenHeight / 2.f) * scales[scaleIndex] / 75.f);
    }
    else
    {
        sprintf(fpsString, "%dFPS", fps);
    }
    Text fpsText(fpsString, arialRounded);
    fpsText.setCharacterSize(32);
    fpsText.setFillColor(ORANGE);
    fpsText.setPosition(20.f, 10.f);
    window.draw(fpsText);

    Text authorText;
    authorText.setString(L"Виконав: Крутогуз М. І.");
    authorText.setFont(robotoRegular);
    authorText.setPosition(screenWidth - 350.f, 20.f);
    authorText.setFillColor(ORANGE);
    window.draw(authorText);

    Text functionText(L"a*exp(b*φ), b=ctg(a),", robotoRegular);
    functionText.setPosition(screenWidth - 350.f, 70.f);
    functionText.setFillColor(ORANGE);
    window.draw(functionText);

    Text angleText(L"φ c [0, 2πn],", robotoRegular);
    angleText.setPosition(screenWidth - 350.f, 120.f);
    angleText.setFillColor(ORANGE);
    window.draw(angleText);

    sprintf(paramString, "a = %s, n = %d", toString(alphaString, a), n);
    Text paramText(paramString, robotoRegular);
    paramText.setPosition(screenWidth - 350.f, 170.f);
    paramText.setFillColor(ORANGE);
    window.draw(paramText);
}
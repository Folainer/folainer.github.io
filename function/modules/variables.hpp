#ifndef __VARIABLES__
#define __VARIABLES__
#include <time.h>
#include <SFML/Graphics.hpp>

#define KEY_UP 73
#define KEY_DOWN 74
#define KEY_LEFT 71
#define KEY_RIGHT 72
#define KEY_PLUS 67
#define KEY_MINUS 68
#define PI 3.141592653f

#define ORANGE Color(252, 197, 32)

using namespace sf;

namespace Variables
{
    extern int screenWidth;
    extern int screenHeight;
    extern clock_t currentTime;
    extern clock_t lastFpsTime;
    extern clock_t lastFlipTime;
    extern int fps;
    extern int currentFps;
    extern float scale;
    extern float scales[];
    extern int scaleIndex;
    extern Font arialRounded;
    extern int n;
    extern float a;
    extern int cursorX;
    extern int cursorY;
    extern bool isCursor;
}
#endif // __VARIABLES__
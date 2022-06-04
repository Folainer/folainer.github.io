#include "variables.hpp"

namespace Variables
{
    int screenWidth = 1080;
    int screenHeight = 720;
    clock_t currentTime;
    clock_t lastFpsTime = 0;
    clock_t lastFlipTime = 0;
    int fps = 60;
    int currentFps;
    float scale = 1.f;
    float scales[] = {0.00001, 0.00002, 0.00005, 0.0001, 0.0002, 0.0005, 0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000};
    int scaleIndex = 15;
    Font arialRounded;
    int n = 1;
    float a = 10;
    int cursorX = 0;
    int cursorY = 0;
    bool isCursor = false;
}
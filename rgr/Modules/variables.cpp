#include "variables.hpp"

namespace Variables
{
    int res;
    int screenWidth;
    int screenHeight;
    bool isMenuOpen;
    bool isPlayFocus;
    const int menuWidth = 400;
    const int menuHeight = 270;
    float angle = -45;
    int jetNumber = 0;
    clock_t startGameTime = 0;
    clock_t currentGameTime;
    clock_t crusialGameTime = 0;
    clock_t fpsGameTime = 0;
    clock_t lastMissileTime = 0;
    int hearts = 10;
    Missile *missiles = NULL;
    Missile *endMissile = NULL;
    Jet *jets = NULL;
    Jet *endJet = NULL;
    Bomb *bombs = NULL;
    Bomb *endBomb = NULL;
    long long int cadr;
    int currentFps = 0;
    int fps = 0;
}

#ifndef VARIABLES
#define VARIABLES
#include <time.h>

#define PI 3.14159

#define KEY_UP 73
#define KEY_DOWN 74
#define KEY_LEFT 71
#define KEY_RIGHT 72
#define KEY_ENTER 58
#define KEY_SHIFT 38
#define KEY_CTRL 37
#define KEY_SPACE 57

namespace Variables
{
    typedef struct jet_t
    {
        clock_t existTime;
        float x;
        float y;
        struct jet_t *link;
    } Jet;
    typedef struct missle_t
    {
        clock_t existTime;
        float angle;
        float x;
        float y;
        struct missle_t *link;
    } Missile;
    typedef struct bomb_t
    {
        float y;
        struct bomb_t *link;
    } Bomb;
    extern int res;
    extern int screenWidth;
    extern int screenHeight;
    extern bool isMenuOpen;
    extern bool isPlayFocus;
    extern const int menuWidth;
    extern const int menuHeight;
    extern float angle;
    extern int jetNumber;
    extern clock_t startGameTime;
    extern clock_t currentGameTime;
    extern clock_t crusialGameTime;
    extern clock_t fpsGameTime;
    extern clock_t lastMissileTime;
    extern int hearts;
    extern Missile *missiles;
    extern Missile *endMissile;
    extern Jet *jets;
    extern Jet *endJet;
    extern Bomb *bombs;
    extern Bomb *endBomb;
    extern long long int cadr;
    extern int currentFps;
    extern int fps;
}

#endif
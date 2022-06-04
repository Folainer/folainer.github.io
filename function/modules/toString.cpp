#include "toString.hpp"

char *toString(char *string, float value)
{
    // char paramString[10];
    // if (value == 0)
    // {
    //     sprintf(string, "0");
    //     return string;
    // }
    // else if (fabs(value) < 1.f)
    // {
    //     float copy = fabs(value);
    //     int zeros = 0;
    //     while (copy < 1.f)
    //     {
    //         copy *= 10.f;
    //         zeros++;
    //     }
    //     sprintf(paramString, "%%.%df", zeros);
    //     sprintf(string, paramString, value);
    //     return string;
    // }
    // else
    // {
    //     float copy = fabs(value);
    //     copy -= 1.f;
    //     int zeros = 0;
    //     while (copy < 1.f)
    //     {
    //         copy *= 10.f;
    //         zeros++;
    //     }
    //     sprintf(paramString, "%%.%df", zeros);
    //     sprintf(string, paramString, value);
    //     return string;
    // }

    // sprintf(paramString, "%.0f", copy);
    // int i = 0;
    // while (paramString[strlen(paramString) - i - 1] != 0)
    // {
    //     i++;
    // }

    // float copy = fabs(value);
    // copy *= 100000;
    // round(copy);
    // int i = 0;
    // while ((int)copy % 10 == 0)
    // {
    //     copy /= 10;
    //     round(copy);
    //     i++;
    // }
    // sprintf(paramString, "%%.%df", 5 - i);
    // printf("%d %d\n", i, strlen(paramString));
    // sprintf(string, paramString, value);
    sprintf(string, "%f", value);
    for (int i = strlen(string) - 1; i >= 0; i--)
    {
        if (string[i] == '0')
        {
            string[i] = '\0';
            if (string[i - 1] == '.')
            {
                string[i - 1] = '\0';
            }
        }
        else
        {
            break;
        }
    }
    return string;
}
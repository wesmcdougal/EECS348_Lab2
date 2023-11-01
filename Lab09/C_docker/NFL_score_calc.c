#include <stdio.h>

void score_combo(int score) {
    for (int TD_plus_2 = 0; TD_plus_2 <= score / 8; TD_plus_2++) {
        for (int TD_plus_1 = 0; TD_plus_1 <= score / 7; TD_plus_1++) {
            for (int TD = 0; TD <= score / 6; TD++) {
                for (int FG = 0; FG <= score / 3; FG++) {
                    for (int safety = 0; safety <= score / 2; safety++) {
                        if ((TD_plus_2 * 8 + TD_plus_1 * 7 + TD * 6 + FG * 3 + safety * 2) == score) {
                            printf("%d TD + 2pt, %d TD + FG, %d TD, %d 3pt FG, %d Safety\n", TD_plus_2, TD_plus_1, TD, FG, safety);
                        }
                    }
                }
            }
        }
    }
}

int main() {
    int score;
    while (1) {
        printf("=========================\n");
        printf("NFL SCORE CALCULATOR\n");
        printf("=========================\n");
        printf("\nEnter 0 or 1 to STOP");
        printf("\nEnter NFL score: ");
        scanf("%d", &score);
        if (score < 2) {
            printf("\nShutting down...\n\n");
            break;
        }
        printf("\nPossible combinations of scoring plays:\n");
        score_combo(score);
        printf("\n");
    }

    return 0;
}
const languageData = [
    {
        code: 'EN',
        menu: ['Main', 'Portfolio'],
        filter: ['This month', 'This year', 'All', 'All(reserved order)'],
        filterLabels: ['Upload Date', 'Group'],
        portfolio: [
            {
                title: 'Programming Arduino LED matrix',
                date: new Date('2023-06-08'),
                group: ['Electronics', 'Programming'],
                src: 'img/arduino.webp',
                link: 'led_matrix.html',
                content: [
                    {
                        maintitle: 'Programming Arduino LED matrix'
                    },
                    {
                        title: 'The final result of the project'
                    },
                    {
                        video: videoEN1
                    },
                    {
                        title: 'Description of the project'
                    },
                    {
                        text: textEN1
                    },
                    // {
                    //     title: 'Led matrix'
                    // },
                    // {
                    //     image: 'arduino.webp'
                    // },
                    // {
                    //     slider: 1
                    // },
                    // {
                    //     pdf: ['a.pdf', 'hello']
                    // }
                ]
            },
            {
                date: new Date('2023-06-08'),
                title: 'Shoot a jet',
                group: ['Game', 'Programming'],
                src: 'img/shoot_jet.webp',
                link: 'shoot_a_jet.html',
                content: [
                    {
                    maintitle: 'Game "Shoot a jet"'
                    },
                    {
                        title: 'The final result of the project'
                    },
                    {
                        video: videoEN2
                    },
                    {
                        title: 'Description of the project'
                    },
                    {
                        text: textEN2
                    },
            ]
            },
            {
                date: new Date('2023-08-24'),
                title: 'Animation in Blender',
                group: ['Animation', '3D'],
                src: 'img/blender_animation.webp',
                link: 'animation_in_blender.html',
                content: [
                    {
                    maintitle: 'Animation in Blender'
                    },
                    {
                        title: 'The final result of the project'
                    },
                    {
                        video: videoEN3
                    },
                    {
                        title: 'Description of the project'
                    },
                    {
                        text: textEN3
                    },
            ]
            },
            {
                date: new Date('2023-08-24'),
                title: 'Tic Tac Toe game',
                group: ['Game', 'Programming'],
                src: 'img/tic_tac_toe_game.webp',
                link: 'tic_tac_toe_game.html',
                content: [
                    {
                    maintitle: 'Tic Tac Toe game'
                    },
                    {
                        title: 'The final result of the project'
                    },
                    {
                        video: videoEN4
                    },
                    {
                        title: 'Description of the project'
                    },
                    {
                        text: textEN4
                    },
                ]         
            },
            {
                date: new Date('2023-08-31'),
                title: 'Drawing #1',
                group: ['Drawing'],
                src: 'img/drawing1.jpg',
                link: 'drawing1.html',
                content: [
                    {
                    maintitle: 'Drawing #1'
                    },
                    {
                        title: 'The final result of my work'
                    },
                    {
                        image: 'drawing1.jpg'
                    },
                    {
                        title: 'Description of the work'
                    },
                    {
                        text: textEN5
                    },
                    {
                        title: 'Work process (a separate photo was taken on a separate day)'
                    },
                    {
                        pdf: ['drawing1.pdf', 'work process']
                    }
                ]         
            },
            {
                date: new Date('2023-08-31'),
                title: 'Drawing #3',
                group: ['Drawing'],
                src: 'img/drawing3.jpg',
                link: 'drawing3.html',
                content: [
                    {
                    maintitle: 'Drawing #3'
                    },
                    {
                        title: 'The final result of my work'
                    },
                    {
                        image: 'drawing3.jpg'
                    },
                    {
                        title: 'Description of the work'
                    },
                    {
                        text: textEN7
                    },
                    {
                        title: 'Work process (a separate photo was taken on a separate day)'
                    },
                    {
                        pdf: ['drawing3.pdf', 'work process']
                    }
                ]         
            },
            {
                date: new Date('2024-01-09'),
                title: 'Blueprint',
                group: ['Blueprint', 'Drawing'],
                src: 'img/blueprint1.png',
                link: 'blueprint1.html',
                content: [
                    {
                    maintitle: 'Blueprint'
                    },
                    {
                        title: 'The final result of my work'
                    },
                    {
                        image: 'blueprint1.png'
                    },
                    {
                        title: 'Description of the work'
                    },
                    {
                        text: textEN8
                    }
                ]         
            },
            {
                date: new Date('2024-01-10'),
                title: 'Assembler',
                group: ['Programming'],
                src: 'img/assembler.png',
                link: 'assembler.html',
                content: [
                    {
                    maintitle: 'Assembler'
                    },
                    {
                        title: 'The final result of my work'
                    },
                    {
                        image: 'assembler.png'
                    },
                    {
                        title: 'Description of the work'
                    },
                    {
                        text: textEN9
                    },
                    {
                        pdf: ['assemblerDubugging.pdf', 'Program debugging']
                    }
                ]         
            },
            {
                date: new Date('2024-01-11'),
                title: 'Online store website',
                group: ['Programming', 'WEB'],
                src: 'img/onlineStore.webp',
                link: 'online_store.html',
                content: [
                    {
                    maintitle: 'Online store website'
                    },
                    {
                        title: 'The final result of my work'
                    },
                    {
                        video: videoEN10
                    },
                    {
                        title: 'Description of the work'
                    },
                    {
                        text: textEN10
                    }
                ]         
            },
        ]
    },
    {
        code: 'UA',
        menu: ['Меню', 'Портфоліо'],
        filter: ['Цей місяць', 'Цей рік', 'Все', 'Все(обернений порядок)'],
        filterLabels: ['Дата завантаження', 'Група'],
        portfolio: [
            {
                title: 'Програмування світлодіодної матриці Arduino',
                date: new Date('2023-06-08'),
                group: ['Електроніка', 'Програмування'],
                src: 'img/arduino.webp',
                link: 'led_matrix.html',
                content: [
                    {
                        maintitle: 'Програмування світлодіодної матриці Arduino'
                    },
                    {
                        title: 'Кінцевий результат проекту'
                    },
                    {
                        video: videoEN1
                    },
                    {
                        title: 'Опис проекту'
                    },
                    {
                        text: textUA1
                    }
                ]
            },
            {
                date: new Date('2023-06-08'),
                title: 'Збий реактивний літак',
                group: ['Гра', 'Програмування'],
                src: 'img/shoot_jet.webp',
                link: 'shoot_a_jet.html',
                content: [
                    {
                    maintitle: 'Гра «Збий реактивний літак»'
                    },
                    {
                        title: 'Кінцевий результат проекту'
                    },
                    {
                        video: videoEN2
                    },
                    {
                        title: 'Опис проекту'
                    },
                    {
                        text: textUA2
                    },
            ]
            },
            {
                date: new Date('2023-08-24'),
                title: 'Анімація в Blender',
                group: ['Анімація', '3D'],
                src: 'img/blender_animation.webp',
                link: 'animation_in_blender.html',
                content: [
                    {
                    maintitle: 'Анімація в Blender'
                    },
                    {
                        title: 'Кінцевий результат проекту'
                    },
                    {
                        video: videoEN3
                    },
                    {
                        title: 'Опис проекту'
                    },
                    {
                        text: textUA3
                    },
            ]
            },
            {
                date: new Date('2023-08-24'),
                title: 'Гра «Хрестики-нулики»',
                group: ['Гра', 'Програмування'],
                src: 'img/tic_tac_toe_game.webp',
                link: 'tic_tac_toe_game.html',
                content: [
                    {
                    maintitle: 'Гра «Хрестики-нулики»'
                    },
                    {
                        title: 'Кінцевий результат проекту'
                    },
                    {
                        video: videoEN4
                    },
                    {
                        title: 'Опис проекту'
                    },
                    {
                        text: textUA4
                    },
                ]         
            },
            {
                date: new Date('2023-08-31'),
                title: 'Малюнок №1',
                group: ['Малювання'],
                src: 'img/drawing1.jpg',
                link: 'drawing1.html',
                content: [
                    {
                    maintitle: 'Малюнок №1'
                    },
                    {
                        title: 'Кінцевий результат моєї роботи'
                    },
                    {
                        image: 'drawing1.jpg'
                    },
                    {
                        title: 'Опис роботи'
                    },
                    {
                        text: textUA5
                    },
                    {
                        title: 'Процес роботи (окреме фото зроблено в окремий день)'
                    },
                    {
                        pdf: ['drawing1.pdf', 'Процес роботи']
                    }
                ]         
            },
            {
                date: new Date('2023-08-31'),
                title: 'Малюнок №3',
                group: ['Малювання'],
                src: 'img/drawing3.jpg',
                link: 'drawing3.html',
                content: [
                    {
                    maintitle: 'Малюнок №3'
                    },
                    {
                        title: 'Кінцевий результат моєї роботи'
                    },
                    {
                        image: 'drawing3.jpg'
                    },
                    {
                        title: 'Опис роботи'
                    },
                    {
                        text: textUA7
                    },
                    {
                        title: 'Процес роботи (окреме фото зроблено в окремий день)'
                    },
                    {
                        pdf: ['drawing3.pdf', 'Процес роботи']
                    }
                ]         
            },
            {
                date: new Date('2024-01-09'),
                title: 'Креслення',
                group: ['Креслення', 'Малювання'],
                src: 'img/blueprint1.png',
                link: 'blueprint1.html',
                content: [
                    {
                    maintitle: 'Креслення'
                    },
                    {
                        title: 'Результат роботи'
                    },
                    {
                        image: 'blueprint1.png'
                    },
                    {
                        title: 'Опис роботи'
                    },
                    {
                        text: textUA8
                    }
                ]         
            },
            {
                date: new Date('2024-01-10'),
                title: 'Асемблер',
                group: ['Програмування'],
                src: 'img/assembler.png',
                link: 'assembler.html',
                content: [
                    {
                    maintitle: 'Асемблер'
                    },
                    {
                        title: 'Результат роботи'
                    },
                    {
                        image: 'assembler.png'
                    },
                    {
                        title: 'Опис роботи'
                    },
                    {
                        text: textUA9
                    },
                    {
                        pdf: ['assemblerDubuggingUA.pdf', 'Налагодження програми']
                    }
                ]         
            },
            {
                date: new Date('2024-01-11'),
                title: 'Сайт інтернет-магазину',
                group: ['Програмування', 'WEB'],
                src: 'img/onlineStore.webp',
                link: 'online_store.html',
                content: [
                    {
                    maintitle: 'Сайт інтернет-магазину'
                    },
                    {
                        title: 'Результат роботи'
                    },
                    {
                        video: videoEN10
                    },
                    {
                        title: 'Опис роботи'
                    },
                    {
                        text: textUA10
                    }
                ]         
            },
        ]
    },
    
    // {
    //     code: 'JP',
    //     menu: ['メニュー', 'ポートフォリオ']
    // }
];
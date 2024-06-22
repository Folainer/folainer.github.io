const languageData = [
    {
        code: 'EN',
        menu: ['Main', 'Portfolio'],
        filter: ['This month', 'This year', 'All', 'All(reversed order)'],
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
            {
                date: new Date('2024-06-22'),
                title: 'Development of the backend for the graphic editor',
                group: ['Programming'],
                src: 'img/hqdefault.webp',
                link: 'graphicEditor.html',
                content: [
                    {
                    maintitle: 'Development of the backend for the graphic editor'
                    },
                    {
                        title: 'The final result of my work'
                    },
                    {
                        video: videoEN11
                    },
                    {
                        title: 'Description of the work'
                    },
                    {
                        text: textEN11
                    }
                ]         
            },
            {
                date: new Date('2024-06-22'),
                title: 'Backend development for the file manager',
                group: ['Programming'],
                src: 'img/hqdefault3.webp',
                link: 'fileManager.html',
                content: [
                    {
                    maintitle: 'Backend development for the file manager'
                    },
                    {
                        title: 'The final result of my work'
                    },
                    {
                        video: videoEN12
                    },
                    {
                        title: 'Description of the work'
                    },
                    {
                        text: textEN12
                    }
                ]         
            },
            {
                date: new Date('2024-06-22'),
                title: '',
                group: ['Programming'],
                src: 'img/hqdefault2.webp',
                link: 'multiprogramSystem.html',
                content: [
                    {
                    maintitle: 'Model of multiprogram system on assembler'
                    },
                    {
                        title: 'The final result of my work'
                    },
                    {
                        video: videoEN13
                    },
                    {
                        title: 'Description of the work'
                    },
                    {
                        text: textEN13
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
            {
                date: new Date('2024-06-22'),
                title: 'Розробка бекенда для графічного редактора',
                group: ['Програмування'],
                src: 'img/hqdefault.webp',
                link: 'graphicEditor.html',
                content: [
                    {
                    maintitle: 'Розробка бекенда для графічного редактора'
                    },
                    {
                        title: 'Кінцевий результат моєї роботи'
                    },
                    {
                        video: videoEN11
                    },
                    {
                        title: 'Опис роботи'
                    },
                    {
                        text: textUA11
                    }
                ]         
            },
            {
                date: new Date('2024-06-22'),
                title: 'Розробка бекенда для файлового менеджера',
                group: ['Програмування'],
                src: 'img/hqdefault3.webp',
                link: 'fileManager.html',
                content: [
                    {
                    maintitle: 'Розробка бекенда для файлового менеджера'
                    },
                    {
                        title: 'Кінцевий результат моєї роботи'
                    },
                    {
                        video: videoEN12
                    },
                    {
                        title: 'Опис роботи'
                    },
                    {
                        text: textUA12
                    }
                ]         
            },
            {
                date: new Date('2024-06-22'),
                title: 'Модель багатопрограмної системи на асемблері',
                group: ['Програмування'],
                src: 'img/hqdefault2.webp',
                link: 'multiprogramSystem.html',
                content: [
                    {
                    maintitle: 'Модель багатопрограмної системи на асемблері'
                    },
                    {
                        title: 'Кінцевий результат моєї роботи'
                    },
                    {
                        video: videoEN13
                    },
                    {
                        title: 'Опис роботи'
                    },
                    {
                        text: textUA13
                    }
                ]         
            },
        ]
    },
    {
        code: 'JP',
        menu: ['メニュー', 'ポートフォリオ'],
        filter: ['今月', '今年', 'すべて', 'すべて（逆順）'],
        filterLabels: ['アップロード日', 'グループ'],
        portfolio: [
            {
                title: 'Arduino LED マトリックスのプログラミング',
                date: new Date('2023-06-08'),
                group: ['電子工学', ' プログラミング'],
                src: 'img/arduino.webp',
                link: 'led_matrix.html',
                content: [
                    {
                        maintitle: 'Arduino LED マトリックスのプログラミング'
                    },
                    {
                        title: 'プロジェクトの最終結果'
                    },
                    {
                        video: videoEN1
                    },
                    {
                        title: 'プロジェクトの説明'
                    },
                    {
                        text: textJP1
                    },
                ]
            },
            {
                date: new Date('2023-06-08'),
                title: 'ジェットを撃つ',
                group: ['ゲーム', 'プログラミング'],
                src: 'img/shoot_jet.webp',
                link: 'shoot_a_jet.html',
                content: [
                    {
                    maintitle: 'ゲーム「ジェットを撃つ」'
                    },
                    {
                        title: 'プロジェクトの最終結果'
                    },
                    {
                        video: videoEN2
                    },
                    {
                        title: 'プロジェクトの説明'
                    },
                    {
                        text: textJP2
                    },
            ]
            },
            {
                date: new Date('2023-08-24'),
                title: 'Blender でのアニメーション',
                group: ['アニメーション', '3D'],
                src: 'img/blender_animation.webp',
                link: 'animation_in_blender.html',
                content: [
                    {
                    maintitle: 'Blender でのアニメーション'
                    },
                    {
                        title: 'プロジェクトの最終結果'
                    },
                    {
                        video: videoEN3
                    },
                    {
                        title: 'プロジェクトの説明'
                    },
                    {
                        text: textJP3
                    },
            ]
            },
            {
                date: new Date('2023-08-24'),
                title: '井戸取りゲーム',
                group: ['ゲーム', 'プログラミング'],
                src: 'img/tic_tac_toe_game.webp',
                link: 'tic_tac_toe_game.html',
                content: [
                    {
                    maintitle: '井戸取りゲーム'
                    },
                    {
                        title: 'プロジェクトの最終結果'
                    },
                    {
                        video: videoEN4
                    },
                    {
                        title: 'プロジェクトの説明'
                    },
                    {
                        text: textJP4
                    },
                ]         
            },
            {
                date: new Date('2023-08-31'),
                title: '第3図',
                group: ['描画'],
                src: 'img/drawing3.jpg',
                link: 'drawing3.html',
                content: [
                    {
                    maintitle: '第3図'
                    },
                    {
                        title: 'プロジェクトの最終結果'
                    },
                    {
                        image: 'drawing3.jpg'
                    },
                    {
                        title: 'プロジェクトの説明'
                    },
                    {
                        text: textJP7
                    },
                    {
                        title: '作業過程（別の日に別々の写真が撮影されました）'
                    },
                    {
                        pdf: ['drawing3.pdf', '作業過程']
                    }
                ]         
            },
            {
                date: new Date('2024-01-09'),
                title: 'ブループリント',
                group: ['ブループリント', '描画'],
                src: 'img/blueprint1.png',
                link: 'blueprint1.html',
                content: [
                    {
                    maintitle: 'ブループリント'
                    },
                    {
                        title: 'プロジェクトの最終結果'
                    },
                    {
                        image: 'blueprint1.png'
                    },
                    {
                        title: 'プロジェクトの説明'
                    },
                    {
                        text: textJP8
                    }
                ]         
            },
            {
                date: new Date('2024-01-10'),
                title: 'アセンブリ言語',
                group: ['プログラミング'],
                src: 'img/assembler.png',
                link: 'assembler.html',
                content: [
                    {
                    maintitle: 'アセンブリ言語'
                    },
                    {
                        title: 'プロジェクトの最終結果'
                    },
                    {
                        image: 'assembler.png'
                    },
                    {
                        title: 'プロジェクトの説明'
                    },
                    {
                        text: textJP9
                    },
                    {
                        pdf: ['assemblerDubugging.pdf', 'プログラムのデバッグ']
                    }
                ]         
            },
            {
                date: new Date('2024-01-11'),
                title: 'オンラインストアのウェブサイト',
                group: ['プログラミング', 'WEB'],
                src: 'img/onlineStore.webp',
                link: 'online_store.html',
                content: [
                    {
                    maintitle: 'オンラインストアのウェブサイト'
                    },
                    {
                        title: 'プロジェクトの最終結果'
                    },
                    {
                        video: videoEN10
                    },
                    {
                        title: 'プロジェクトの説明'
                    },
                    {
                        text: textJP10
                    }
                ]         
            },
            {
                date: new Date('2024-06-22'),
                title: 'グラフィックエディタのバックエンドの開発',
                group: ['プログラミング'],
                src: 'img/hqdefault.webp',
                link: 'graphicEditor.html',
                content: [
                    {
                    maintitle: 'グラフィックエディタのバックエンドの開発'
                    },
                    {
                        title: 'プロジェクトの最終結果'
                    },
                    {
                        video: videoEN11
                    },
                    {
                        title: 'プロジェクトの説明'
                    },
                    {
                        text: textJP11
                    }
                ]         
            },
            {
                date: new Date('2024-06-22'),
                title: 'ファイルマネージャーのバックエンド開発',
                group: ['プログラミング'],
                src: 'img/hqdefault3.webp',
                link: 'fileManager.html',
                content: [
                    {
                    maintitle: 'ファイルマネージャーのバックエンド開発'
                    },
                    {
                        title: 'プロジェクトの最終結果'
                    },
                    {
                        video: videoEN12
                    },
                    {
                        title: 'プロジェクトの説明'
                    },
                    {
                        text: textJP12
                    }
                ]         
            },
            {
                date: new Date('2024-06-22'),
                title: 'アセンブラ上のマルチプログラムシステムのモデル',
                group: ['プログラミング'],
                src: 'img/hqdefault2.webp',
                link: 'multiprogramSystem.html',
                content: [
                    {
                    maintitle: 'アセンブラ上のマルチプログラムシステムのモデル'
                    },
                    {
                        title: 'プロジェクトの最終結果'
                    },
                    {
                        video: videoEN13
                    },
                    {
                        title: 'プロジェクトの説明'
                    },
                    {
                        text: textJP13
                    }
                ]         
            },
        ]
    },
];
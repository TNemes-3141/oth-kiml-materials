interface SemesterMaterials {
    id: number,
    name: string,
    units: Unit[],
}

interface Unit {
    number: number,
    materials: LectureMaterial[],
}

export interface LectureMaterial {
    title: string,
    links: AnnotatedLink[],
    unlockTime: Date,
}

export interface AnnotatedLink {
    title: string,
    uri: string,
}

export const semesterMaterials: SemesterMaterials[] = [
  {
    id: 0,
    name: "SS 2025",
    units: [
      {
        number: 1,
        materials: [
          {
            title: "Ordinary Least Squares (OLS) Demo",
            links: [
              {
                title: "Desmos",
                uri: "https://www.desmos.com/calculator/r9fm4syebi?lang=de",
              },
            ],
            unlockTime: new Date("2025-03-21T14:30:00"),
          },
          {
            title: "Die Kostenfunktion (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SGlgS",
              },
            ],
            unlockTime: new Date("2025-03-21T14:30:00"),
          },
          {
            title: "Mitmachübung: Interaktives Modell eines Perzeptrons",
            links: [
              {
                title: "Übung",
                uri: "https://tnemes-3141.github.io/perzeptron-demo/",
              },
            ],
            unlockTime: new Date("2025-03-21T14:30:00"),
          },
        ]
      },
      {
        number: 2,
        materials: [
          {
            title: "Sigmoid vs. ReLU Demo",
            links: [
              {
                title: "Desmos",
                uri: "https://www.desmos.com/calculator/lz8h2iejdx",
              },
            ],
            unlockTime: new Date("2025-03-21T14:30:00"),
          },
          {
            title: "Gradient descent (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SGlg6",
              },
            ],
            unlockTime: new Date("2025-03-21T14:30:00"),
          },
          {
            title: "Mitmachübung: Trainieren eines neuronalen Netzwerks",
            links: [
              {
                title: "Colab",
                uri: "https://colab.research.google.com/drive/1HVMc-fIU4gWD0SiswDBzVSRafJzcFyaX?usp=sharing",
              },
              {
                title: "GitHub",
                uri: "https://github.com/TNemes-3141/neural-networks-demo",
              },
            ],
            unlockTime: new Date("2025-03-21T14:30:00"),
          },
          {
            title: "Neural Networks (Videoreihe) von 3Blue1Brown",
            links: [
              {
                title: "Playlist",
                uri: "https://www.youtube.com/playlist?list=PLgxo3DDiqnvAmMOTzZbgD9d4gtQ9V7Lig",
              },
            ],
            unlockTime: new Date("2025-03-21T14:30:00"),
          }
        ]
      },
      {
        number: 3,
        materials: [
          {
            title: "Splitting in Decision Trees (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SGl4j",
              },
            ],
            unlockTime: new Date("2025-03-28T14:30:00"),
          },
          {
            title: "Demo für DTL-Komplexität",
            links: [
              {
                title: "Desmos",
                uri: "https://www.desmos.com/calculator/wlt2aaf15m",
              },
            ],
            unlockTime: new Date("2025-03-28T14:30:00"),
          },
          {
            title: "Flappy Bird-Spielumgebung (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SGl4r",
              },
            ],
            unlockTime: new Date("2025-03-28T14:30:00"),
          },
          {
            title: "Mitmachübung: Frozen Lake-Game",
            links: [
              {
                title: "Übung",
                uri: "https://tnemes-3141.github.io/q-learning-demo/",
              },
            ],
            unlockTime: new Date("2025-03-28T14:30:00"),
          }
        ]
      },
      {
        number: 4,
        materials: [
          {
            title: "Support Vector Machines (SVMs) zum Ausprobieren",
            links: [
              {
                title: "Demo",
                uri: "https://greitemann.dev/svm-demo",
              },
            ],
            unlockTime: new Date("2025-03-29T09:30:00"),
          },
          {
            title: "Visualisierung k-nearest neighbors (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SGnbt",
              },
            ],
            unlockTime: new Date("2025-03-29T09:30:00"),
          },
          {
            title: "K-means Clustering zum Ausprobieren",
            links: [
              {
                title: "Interaktiver Graph",
                uri: "http://alekseynp.com/viz/k-means.html",
              },
            ],
            unlockTime: new Date("2025-03-29T09:30:00"),
          },
          {
            title: "Mitmachübung: Vor- und Nachbereitung eines Datensatzes",
            links: [
              {
                title: "Colab",
                uri: "https://colab.research.google.com/drive/1-z1cXOFJMKlvTEWs3W7jldfNBNSFuKMA?usp=sharing",
              },
              {
                title: "GitHub",
                uri: "https://github.com/TNemes-3141/neural-networks-demo",
              },
            ],
            unlockTime: new Date("2025-03-29T09:30:00"),
          }
        ]
      },
      {
        number: 5,
        materials: [
          {
            title: "Fashion-MNIST Inspektor",
            links: [
              {
                title: "KnowYourData",
                uri: "https://knowyourdata-tfds.withgoogle.com/#tab=STATS&dataset=fashion_mnist",
              },
            ],
            unlockTime: new Date("2025-04-26T14:30:00"),
          },
          {
            title: "Kernels zum Ausprobieren",
            links: [
              {
                title: "Filterlabor",
                uri: "https://editor.p5js.org/MaschinenNah/full/PZYCjAsie",
              },
            ],
            unlockTime: new Date("2025-04-26T15:00:00"),
          },
          {
            title: "CNN Explainer",
            links: [
              {
                title: "Übung",
                uri: "https://poloclub.github.io/cnn-explainer/",
              },
            ],
            unlockTime: new Date("2025-04-26T15:00:00"),
          }
        ]
      },
      {
        number: 6,
        materials: [
          {
            title: "Das LSTM-Modul (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SQWlT",
              },
            ],
            unlockTime: new Date("2025-04-27T09:00:00"),
          },
          {
            title: "Attention und Transformers (Videoreihe) von StatQuest",
            links: [
              {
                title: "Playlist",
                uri: "https://www.youtube.com/watch?v=PSs6nxngL6k&list=PLgxo3DDiqnvA72eCg3Feqn0D7ooEu1lgB&index=3",
              },
            ],
            unlockTime: new Date("2025-04-27T09:00:00"),
          },
          {
            title: "Image-2-Image Demo",
            links: [
              {
                title: "Interaktive GANs",
                uri: "https://affinelayer.com/pixsrv/index.html",
              },
            ],
            unlockTime: new Date("2025-04-27T09:00:00"),
          },
          {
            title: "Text Generation Web-UI (Open source-Textgenerator)",
            links: [
              {
                title: "GitHub",
                uri: "https://github.com/oobabooga/text-generation-webui",
              },
              {
                title: "HuggingFace Modell",
                uri: "https://huggingface.co/TheBloke/Llama-2-13B-chat-GGUF",
              },
            ],
            unlockTime: new Date("2025-04-27T09:00:00"),
          },
          {
            title: "Fooocus (Open source-Bildgenerator)",
            links: [
              {
                title: "GitHub",
                uri: "https://github.com/lllyasviel/Fooocus",
              },
              {
                title: "HuggingFace Modell",
                uri: "https://huggingface.co/RunDiffusion/Juggernaut-XL-v9",
              },
              {
                title: "CivitAI",
                uri: "https://civitai.com/models/133005/juggernaut-xl",
              },
            ],
            unlockTime: new Date("2025-04-27T09:00:00"),
          },
          {
            title: "Data Labeling-Simulation",
            links: [
              {
                title: "Label Studio",
                uri: "https://labelstud.io/playground/",
              },
            ],
            unlockTime: new Date("2025-04-27T09:00:00"),
          },
          {
            title: "Machine Learning-Glossar",
            links: [
              {
                title: "Google Developers",
                uri: "https://developers.google.com/machine-learning/glossary",
              },
            ],
            unlockTime: new Date("2025-04-27T09:00:00"),
          }
        ]
      }
    ],
  },
  {
    id: 1,
    name: "WS 2024",
    units: [
      {
        number: 1,
        materials: [
          {
            title: "Ordinary Least Squares (OLS) Demo",
            links: [
              {
                title: "Desmos",
                uri: "https://www.desmos.com/calculator/r9fm4syebi?lang=de",
              },
            ],
            unlockTime: new Date("2024-11-29T15:00:00"),
          },
          {
            title: "Die Kostenfunktion (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SGlgS",
              },
            ],
            unlockTime: new Date("2024-11-29T15:00:00"),
          },
          {
            title: "Mitmachübung: Interaktives Modell eines Perzeptrons",
            links: [
              {
                title: "Übung",
                uri: "https://tnemes-3141.github.io/perzeptron-demo/",
              },
            ],
            unlockTime: new Date("2024-11-29T16:00:00"),
          },
          {
            title: "Sigmoid vs. ReLU Demo",
            links: [
              {
                title: "Desmos",
                uri: "https://www.desmos.com/calculator/lz8h2iejdx",
              },
            ],
            unlockTime: new Date("2024-11-29T16:00:00"),
          },
        ]
      },
      {
        number: 2,
        materials: [
          {
            title: "Gradient descent (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SGlg6",
              },
            ],
            unlockTime: new Date("2024-11-30T09:00:00"),
          },
          {
            title: "Mitmachübung: Trainieren eines neuronalen Netzwerks",
            links: [
              {
                title: "Colab",
                uri: "https://colab.research.google.com/drive/1HVMc-fIU4gWD0SiswDBzVSRafJzcFyaX?usp=sharing",
              },
              {
                title: "GitHub",
                uri: "https://github.com/TNemes-3141/neural-networks-demo",
              },
            ],
            unlockTime: new Date("2024-11-30T09:00:00"),
          },
          {
            title: "Neural Networks (Videoreihe) von 3Blue1Brown",
            links: [
              {
                title: "Playlist",
                uri: "https://www.youtube.com/playlist?list=PLgxo3DDiqnvAmMOTzZbgD9d4gtQ9V7Lig",
              },
            ],
            unlockTime: new Date("2024-11-30T09:00:00"),
          },
          {
            title: "Splitting in Decision Trees (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SGl4j",
              },
            ],
            unlockTime: new Date("2024-11-30T13:00:00"),
          },
          {
            title: "Demo für DTL-Komplexität",
            links: [
              {
                title: "Desmos",
                uri: "https://www.desmos.com/calculator/wlt2aaf15m",
              },
            ],
            unlockTime: new Date("2024-11-30T13:00:00"),
          },
          {
            title: "Flappy Bird-Spielumgebung (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SGl4r",
              },
            ],
            unlockTime: new Date("2024-11-30T13:00:00"),
          },
          {
            title: "Mitmachübung: Frozen Lake-Game",
            links: [
              {
                title: "Übung",
                uri: "https://tnemes-3141.github.io/q-learning-demo/",
              },
            ],
            unlockTime: new Date("2024-11-30T13:00:00"),
          }
        ]
      },
      {
        number: 3,
        materials: [
          {
            title: "Support Vector Machines (SVMs) zum Ausprobieren",
            links: [
              {
                title: "Demo",
                uri: "https://greitemann.dev/svm-demo",
              },
            ],
            unlockTime: new Date("2024-12-06T14:30:00"),
          },
          {
            title: "Visualisierung k-nearest neighbors (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SGnbt",
              },
            ],
            unlockTime: new Date("2024-12-06T15:00:00"),
          },
          {
            title: "K-means Clustering zum Ausprobieren",
            links: [
              {
                title: "Interaktiver Graph",
                uri: "http://alekseynp.com/viz/k-means.html",
              },
            ],
            unlockTime: new Date("2024-12-06T15:00:00"),
          },
          {
            title: "Mitmachübung: Vor- und Nachbereitung eines Datensatzes",
            links: [
              {
                title: "Colab",
                uri: "https://colab.research.google.com/drive/1-z1cXOFJMKlvTEWs3W7jldfNBNSFuKMA?usp=sharing",
              },
              {
                title: "GitHub",
                uri: "https://github.com/TNemes-3141/neural-networks-demo",
              },
            ],
            unlockTime: new Date("2024-12-06T16:00:00"),
          }
        ]
      },
      {
        number: 4,
        materials: [
          {
            title: "Flappy Bird-Spielumgebung (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SutJz",
              },
            ],
            unlockTime: new Date("2024-12-07T09:00:00"),
          },
          {
            title: "Fashion-MNIST Inspektor",
            links: [
              {
                title: "KnowYourData",
                uri: "https://knowyourdata-tfds.withgoogle.com/#tab=STATS&dataset=fashion_mnist",
              },
            ],
            unlockTime: new Date("2024-12-07T09:30:00"),
          },
          {
            title: "Kernels zum Ausprobieren",
            links: [
              {
                title: "Filterlabor",
                uri: "https://editor.p5js.org/MaschinenNah/full/PZYCjAsie",
              },
            ],
            unlockTime: new Date("2024-12-07T09:30:00"),
          },
          {
            title: "CNN Explainer",
            links: [
              {
                title: "Übung",
                uri: "https://poloclub.github.io/cnn-explainer/",
              },
            ],
            unlockTime: new Date("2024-12-07T10:00:00"),
          },
          {
            title: "Image-2-Image Demo",
            links: [
              {
                title: "Interaktive GANs",
                uri: "https://affinelayer.com/pixsrv/index.html",
              },
            ],
            unlockTime: new Date("2024-12-07T13:00:00"),
          },
          {
            title: "Fooocus (Open source-Bildgenerator)",
            links: [
              {
                title: "GitHub",
                uri: "https://github.com/lllyasviel/Fooocus",
              },
              {
                title: "HuggingFace Modell",
                uri: "https://huggingface.co/RunDiffusion/Juggernaut-XL-v9",
              },
              {
                title: "CivitAI",
                uri: "https://civitai.com/models/133005/juggernaut-xl",
              },
            ],
            unlockTime: new Date("2024-12-07T13:30:00"),
          },
          {
            title: "Attention und Transformers (Videoreihen)",
            links: [
              {
                title: "Playlist von StatQuest",
                uri: "https://www.youtube.com/watch?v=PSs6nxngL6k&list=PLgxo3DDiqnvA72eCg3Feqn0D7ooEu1lgB&index=3",
              },
              {
                title: "Playlist von 3Blue1Brown",
                uri: "https://www.youtube.com/watch?v=wjZofJX0v4M&list=PLgxo3DDiqnvCozXT5wbttuszwPV0CdF8d&index=1",
              }
            ],
            unlockTime: new Date("2024-12-07T14:00:00"),
          },
          {
            title: "Machine Learning-Glossar",
            links: [
              {
                title: "Google Developers",
                uri: "https://developers.google.com/machine-learning/glossary",
              },
            ],
            unlockTime: new Date("2024-12-07T15:00:00"),
          }
        ],
      }
    ]
  },
  {
    id: 2,
    name: "SS 2024",
    units: [
      {
        number: 1,
        materials: [
          {
            title: "Ordinary Least Squares (OLS) Demo",
            links: [
              {
                title: "Desmos",
                uri: "https://www.desmos.com/calculator/r9fm4syebi?lang=de",
              },
            ],
            unlockTime: new Date("2024-04-12T16:00:00"),
          },
          {
            title: "Die Kostenfunktion (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SnwYe",
              },
            ],
            unlockTime: new Date("2024-04-12T16:00:00"),
          },
          {
            title: "Mitmachübung: Interaktives Modell eines Perzeptrons",
            links: [
              {
                title: "Übung",
                uri: "https://totemi1324.github.io/perzeptron-demo/",
              },
            ],
            unlockTime: new Date("2024-04-12T17:00:00"),
          },
        ]
      },
      {
        number: 2,
        materials: [
          {
            title: "Sigmoid vs. ReLU Demo",
            links: [
              {
                title: "Desmos",
                uri: "https://www.desmos.com/calculator/lz8h2iejdx",
              },
            ],
            unlockTime: new Date("2024-04-13T09:00:00"),
          },
          {
            title: "Gradient descent (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/Snh9O",
              },
            ],
            unlockTime: new Date("2024-04-13T11:00:00"),
          },
          {
            title: "Mitmachübung: Trainieren eines neuronalen Netzwerks",
            links: [
              {
                title: "Colab",
                uri: "https://colab.research.google.com/drive/1HVMc-fIU4gWD0SiswDBzVSRafJzcFyaX?usp=sharing",
              },
              {
                title: "GitHub",
                uri: "https://github.com/Totemi1324/neural-networks-demo",
              },
            ],
            unlockTime: new Date("2024-04-13T11:00:00"),
          },
          {
            title: "Neural Networks (Videoreihe) von 3Blue1Brown",
            links: [
              {
                title: "Playlist",
                uri: "https://www.youtube.com/playlist?list=PLgxo3DDiqnvAmMOTzZbgD9d4gtQ9V7Lig",
              },
            ],
            unlockTime: new Date("2024-04-13T13:00:00"),
          }
        ]
      },
      {
        number: 3,
        materials: [
          {
            title: "Splitting in Decision Trees (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SuUcF",
              },
            ],
            unlockTime: new Date("2024-04-19T14:45:00"),
          },
          {
            title: "Demo für DTL-Komplexität",
            links: [
              {
                title: "Desmos",
                uri: "https://www.desmos.com/calculator/wlt2aaf15m",
              },
            ],
            unlockTime: new Date("2024-04-19T15:00:00"),
          },
          {
            title: "Flappy Bird-Spielumgebung (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SutJz",
              },
            ],
            unlockTime: new Date("2024-04-19T17:00:00"),
          },
          {
            title: "Mitmachübung: Frozen Lake-Game",
            links: [
              {
                title: "Übung",
                uri: "https://totemi1324.github.io/q-learning-demo/",
              },
            ],
            unlockTime: new Date("2024-04-19T17:30:00"),
          }
        ]
      },
      {
        number: 4,
        materials: [
          {
            title: "Support Vector Machines (SVMs) zum Ausprobieren",
            links: [
              {
                title: "Demo",
                uri: "https://greitemann.dev/svm-demo",
              },
            ],
            unlockTime: new Date("2024-04-20T09:00:00"),
          },
          {
            title: "Visualisierung k-nearest neighbors (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SQbqO",
              },
            ],
            unlockTime: new Date("2024-04-20T09:00:00"),
          },
          {
            title: "K-means Clustering zum Ausprobieren",
            links: [
              {
                title: "Interaktiver Graph",
                uri: "https://editor.p5js.org/MaschinenNah/full/Mlpq-o0q8",
              },
            ],
            unlockTime: new Date("2024-04-20T09:00:00"),
          },
          {
            title: "Mitmachübung: Vor- und Nachbereitung eines Datensatzes",
            links: [
              {
                title: "Colab",
                uri: "https://colab.research.google.com/drive/1-z1cXOFJMKlvTEWs3W7jldfNBNSFuKMA?usp=sharing",
              },
              {
                title: "GitHub",
                uri: "https://github.com/Totemi1324/neural-networks-demo",
              },
            ],
            unlockTime: new Date("2024-04-20T09:00:00"),
          }
        ]
      },
      {
        number: 5,
        materials: [
          {
            title: "Fashion-MNIST Inspektor",
            links: [
              {
                title: "KnowYourData",
                uri: "https://knowyourdata-tfds.withgoogle.com/#tab=STATS&dataset=fashion_mnist",
              },
            ],
            unlockTime: new Date("2024-04-26T14:30:00"),
          },
          {
            title: "Kernels zum Ausprobieren",
            links: [
              {
                title: "Filterlabor",
                uri: "https://editor.p5js.org/MaschinenNah/full/PZYCjAsie",
              },
            ],
            unlockTime: new Date("2024-04-26T15:00:00"),
          },
          {
            title: "CNN Explainer",
            links: [
              {
                title: "Übung",
                uri: "https://poloclub.github.io/cnn-explainer/",
              },
            ],
            unlockTime: new Date("2024-04-26T15:00:00"),
          }
        ]
      },
      {
        number: 6,
        materials: [
          {
            title: "Das LSTM-Modul (Animiertes GIF)",
            links: [
              {
                title: "Gifyu",
                uri: "https://gifyu.com/image/SQWlT",
              },
            ],
            unlockTime: new Date("2024-04-27T09:00:00"),
          },
          {
            title: "Attention und Transformers (Videoreihe) von StatQuest",
            links: [
              {
                title: "Playlist",
                uri: "https://www.youtube.com/watch?v=PSs6nxngL6k&list=PLgxo3DDiqnvA72eCg3Feqn0D7ooEu1lgB&index=3",
              },
            ],
            unlockTime: new Date("2024-04-27T09:00:00"),
          },
          {
            title: "Image-2-Image Demo",
            links: [
              {
                title: "Interaktive GANs",
                uri: "https://affinelayer.com/pixsrv/index.html",
              },
            ],
            unlockTime: new Date("2024-04-27T09:00:00"),
          },
          {
            title: "Text Generation Web-UI (Open source-Textgenerator)",
            links: [
              {
                title: "GitHub",
                uri: "https://github.com/oobabooga/text-generation-webui",
              },
              {
                title: "HuggingFace Modell",
                uri: "https://huggingface.co/TheBloke/Llama-2-13B-chat-GGUF",
              },
            ],
            unlockTime: new Date("2024-04-27T09:00:00"),
          },
          {
            title: "Fooocus (Open source-Bildgenerator)",
            links: [
              {
                title: "GitHub",
                uri: "https://github.com/lllyasviel/Fooocus",
              },
              {
                title: "HuggingFace Modell",
                uri: "https://huggingface.co/RunDiffusion/Juggernaut-XL-v9",
              },
              {
                title: "CivitAI",
                uri: "https://civitai.com/models/133005/juggernaut-xl",
              },
            ],
            unlockTime: new Date("2024-04-27T09:00:00"),
          },
          {
            title: "Data Labeling-Simulation",
            links: [
              {
                title: "Label Studio",
                uri: "https://labelstud.io/playground/",
              },
            ],
            unlockTime: new Date("2024-04-27T09:00:00"),
          },
          {
            title: "Machine Learning-Glossar",
            links: [
              {
                title: "Google Developers",
                uri: "https://developers.google.com/machine-learning/glossary",
              },
            ],
            unlockTime: new Date("2024-04-27T09:00:00"),
          }
        ]
      }
    ],
  },
];
export interface Scene {
  cod: string;
  cheia: string;
  thumb: string;
  width: number;
  height: number;
  nota?: string | null;
  section?: 'meninas' | 'meninos' | null;
}

export interface CatalogStep {
  num: string;
  title: string;
  desc: string;
}

export interface CatalogCategory {
  id: string;
  title: string;
  metaTitle: string;
  contagem: string;
  sub: string;
  totalLabel: string;
  is18Plus?: boolean;
  steps: CatalogStep[];
  scenes: Scene[];
}

export const WHATSAPP_NUMBER = '11926933436';
export const WHATSAPP_FORMATTED = '(11) 92693-3436';
export const BRAND_LOGO = '/assets/aistudio/Logo_premium_de_fotografia_dourado_86e4b0a6.png';

export const CATALOG_CATEGORIES: Record<string, CatalogCategory> = {
  "aniversario": {
    "id": "aniversario",
    "title": "Ensaio de Aniversário",
    "metaTitle": "Ensaio de Aniversário · Catálogo",
    "contagem": "70 cenas · 01 — 70",
    "sub": "",
    "totalLabel": "70 cenas",
    "steps": [
      {
        "num": "I",
        "title": "Veja as cenas",
        "desc": "Cada foto é uma direção de arte completa: figurino, luz, cenário e composição."
      },
      {
        "num": "II",
        "title": "Toque para escolher",
        "desc": "O círculo no canto da foto marca a cena. Toque na foto para ver grande."
      },
      {
        "num": "III",
        "title": "Envie os números",
        "desc": "Copie os números e cole na nossa conversa do WhatsApp."
      }
    ],
    "scenes": [
      {
        "cod": "01",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/01.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/01-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "02",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/02.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/02-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "03",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/03.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/03-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "04",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/04.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/04-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "05",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/05.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/05-p.webp",
        "width": 480,
        "height": 589,
        "nota": null,
        "section": null
      },
      {
        "cod": "06",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/06.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/06-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": null
      },
      {
        "cod": "07",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/07.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/07-p.webp",
        "width": 480,
        "height": 599,
        "nota": null,
        "section": null
      },
      {
        "cod": "08",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/08.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/08-p.webp",
        "width": 480,
        "height": 856,
        "nota": null,
        "section": null
      },
      {
        "cod": "09",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/09.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/09-p.webp",
        "width": 480,
        "height": 644,
        "nota": null,
        "section": null
      },
      {
        "cod": "10",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/10.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/10-p.webp",
        "width": 480,
        "height": 625,
        "nota": null,
        "section": null
      },
      {
        "cod": "11",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/11.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/11-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "12",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/12.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/12-p.webp",
        "width": 480,
        "height": 841,
        "nota": null,
        "section": null
      },
      {
        "cod": "13",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/13.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/13-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "14",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/14.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/14-p.webp",
        "width": 480,
        "height": 626,
        "nota": null,
        "section": null
      },
      {
        "cod": "15",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/15.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/15-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "16",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/16.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/16-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "17",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/17.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/17-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "18",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/18.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/18-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "19",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/19.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/19-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "20",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/20.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/20-p.webp",
        "width": 480,
        "height": 716,
        "nota": null,
        "section": null
      },
      {
        "cod": "21",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/21.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/21-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "22",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/22.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/22-p.webp",
        "width": 480,
        "height": 856,
        "nota": null,
        "section": null
      },
      {
        "cod": "23",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/23.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/23-p.webp",
        "width": 480,
        "height": 594,
        "nota": null,
        "section": null
      },
      {
        "cod": "24",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/24.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/24-p.webp",
        "width": 480,
        "height": 597,
        "nota": null,
        "section": null
      },
      {
        "cod": "25",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/25.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/25-p.webp",
        "width": 480,
        "height": 657,
        "nota": null,
        "section": null
      },
      {
        "cod": "26",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/26.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/26-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "27",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/27.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/27-p.webp",
        "width": 480,
        "height": 640,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "28",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/28.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/28-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "29",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/29.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/29-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": null
      },
      {
        "cod": "30",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/30.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/30-p.webp",
        "width": 480,
        "height": 680,
        "nota": null,
        "section": null
      },
      {
        "cod": "31",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/31.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/31-p.webp",
        "width": 480,
        "height": 841,
        "nota": null,
        "section": null
      },
      {
        "cod": "32",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/32.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/32-p.webp",
        "width": 480,
        "height": 841,
        "nota": null,
        "section": null
      },
      {
        "cod": "33",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/33.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/33-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "34",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/34.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/34-p.webp",
        "width": 480,
        "height": 658,
        "nota": null,
        "section": null
      },
      {
        "cod": "35",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/35.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/35-p.webp",
        "width": 480,
        "height": 598,
        "nota": null,
        "section": null
      },
      {
        "cod": "36",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/36.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/36-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": null
      },
      {
        "cod": "37",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/37.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/37-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "38",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/38.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/38-p.webp",
        "width": 480,
        "height": 657,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "39",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/39.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/39-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "40",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/40.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/40-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "41",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/41.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/41-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "42",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/42.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/42-p.webp",
        "width": 480,
        "height": 640,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "43",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/43.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/43-p.webp",
        "width": 480,
        "height": 702,
        "nota": null,
        "section": null
      },
      {
        "cod": "44",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/44.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/44-p.webp",
        "width": 480,
        "height": 658,
        "nota": null,
        "section": null
      },
      {
        "cod": "45",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/45.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/45-p.webp",
        "width": 480,
        "height": 719,
        "nota": null,
        "section": null
      },
      {
        "cod": "46",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/46.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/46-p.webp",
        "width": 480,
        "height": 603,
        "nota": null,
        "section": null
      },
      {
        "cod": "47",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/47.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/47-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "48",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/48.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/48-p.webp",
        "width": 480,
        "height": 723,
        "nota": null,
        "section": null
      },
      {
        "cod": "49",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/49.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/49-p.webp",
        "width": 480,
        "height": 678,
        "nota": null,
        "section": null
      },
      {
        "cod": "50",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/50.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/50-p.webp",
        "width": 480,
        "height": 723,
        "nota": null,
        "section": null
      },
      {
        "cod": "51",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/51.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/51-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "52",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/52.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/52-p.webp",
        "width": 480,
        "height": 641,
        "nota": null,
        "section": null
      },
      {
        "cod": "53",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/53.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/53-p.webp",
        "width": 480,
        "height": 579,
        "nota": null,
        "section": null
      },
      {
        "cod": "54",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/54.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/54-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "55",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/55.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/55-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "56",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/56.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/56-p.webp",
        "width": 480,
        "height": 686,
        "nota": null,
        "section": null
      },
      {
        "cod": "57",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/57.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/57-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": null
      },
      {
        "cod": "58",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/58.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/58-p.webp",
        "width": 480,
        "height": 719,
        "nota": null,
        "section": null
      },
      {
        "cod": "59",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/59.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/59-p.webp",
        "width": 480,
        "height": 732,
        "nota": null,
        "section": null
      },
      {
        "cod": "60",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/60.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/60-p.webp",
        "width": 480,
        "height": 644,
        "nota": null,
        "section": null
      },
      {
        "cod": "61",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/61.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/61-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "62",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/62.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/62-p.webp",
        "width": 480,
        "height": 852,
        "nota": null,
        "section": null
      },
      {
        "cod": "63",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/63.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/63-p.webp",
        "width": 480,
        "height": 852,
        "nota": null,
        "section": null
      },
      {
        "cod": "64",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/64.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/64-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "65",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/65.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/65-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "66",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/66.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/66-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "67",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/67.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/67-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "68",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/68.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/68-p.webp",
        "width": 480,
        "height": 640,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "69",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/69.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/69-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "70",
        "cheia": "https://catalogo.ultreix.com/img/aniversario/70.webp",
        "thumb": "https://catalogo.ultreix.com/img/aniversario/70-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      }
    ]
  },
  "corporativo": {
    "id": "corporativo",
    "title": "Ensaio Corporativo",
    "metaTitle": "Ensaio Corporativo · Catálogo",
    "contagem": "50 cenas · 01 — 50",
    "sub": "",
    "totalLabel": "50 cenas",
    "steps": [
      {
        "num": "I",
        "title": "Veja as cenas",
        "desc": "Cada foto é uma direção de arte completa: figurino, luz, cenário e composição."
      },
      {
        "num": "II",
        "title": "Toque para escolher",
        "desc": "O círculo no canto da foto marca a cena. Toque na foto para ver grande."
      },
      {
        "num": "III",
        "title": "Envie os números",
        "desc": "Copie os números e cole na nossa conversa do WhatsApp."
      }
    ],
    "scenes": [
      {
        "cod": "01",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/01.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/01-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "02",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/02.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/02-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "03",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/03.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/03-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": null
      },
      {
        "cod": "04",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/04.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/04-p.webp",
        "width": 480,
        "height": 682,
        "nota": null,
        "section": null
      },
      {
        "cod": "05",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/05.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/05-p.webp",
        "width": 480,
        "height": 719,
        "nota": null,
        "section": null
      },
      {
        "cod": "06",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/06.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/06-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "07",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/07.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/07-p.webp",
        "width": 480,
        "height": 911,
        "nota": null,
        "section": null
      },
      {
        "cod": "08",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/08.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/08-p.webp",
        "width": 480,
        "height": 715,
        "nota": null,
        "section": null
      },
      {
        "cod": "09",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/09.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/09-p.webp",
        "width": 480,
        "height": 768,
        "nota": null,
        "section": null
      },
      {
        "cod": "10",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/10.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/10-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "11",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/11.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/11-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "12",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/12.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/12-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "13",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/13.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/13-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "14",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/14.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/14-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "15",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/15.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/15-p.webp",
        "width": 480,
        "height": 860,
        "nota": null,
        "section": null
      },
      {
        "cod": "16",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/16.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/16-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "17",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/17.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/17-p.webp",
        "width": 416,
        "height": 740,
        "nota": null,
        "section": null
      },
      {
        "cod": "18",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/18.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/18-p.webp",
        "width": 480,
        "height": 758,
        "nota": null,
        "section": null
      },
      {
        "cod": "19",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/19.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/19-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "20",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/20.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/20-p.webp",
        "width": 480,
        "height": 768,
        "nota": null,
        "section": null
      },
      {
        "cod": "21",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/21.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/21-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "22",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/22.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/22-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "23",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/23.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/23-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "24",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/24.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/24-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "25",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/25.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/25-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "26",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/26.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/26-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "27",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/27.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/27-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "28",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/28.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/28-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "29",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/29.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/29-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "30",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/30.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/30-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "31",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/31.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/31-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "32",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/32.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/32-p.webp",
        "width": 480,
        "height": 597,
        "nota": null,
        "section": null
      },
      {
        "cod": "33",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/33.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/33-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "34",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/34.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/34-p.webp",
        "width": 480,
        "height": 641,
        "nota": null,
        "section": null
      },
      {
        "cod": "35",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/35.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/35-p.webp",
        "width": 480,
        "height": 673,
        "nota": null,
        "section": null
      },
      {
        "cod": "36",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/36.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/36-p.webp",
        "width": 480,
        "height": 608,
        "nota": null,
        "section": null
      },
      {
        "cod": "37",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/37.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/37-p.webp",
        "width": 480,
        "height": 881,
        "nota": null,
        "section": null
      },
      {
        "cod": "38",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/38.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/38-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": null
      },
      {
        "cod": "39",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/39.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/39-p.webp",
        "width": 480,
        "height": 807,
        "nota": null,
        "section": null
      },
      {
        "cod": "40",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/40.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/40-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "41",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/41.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/41-p.webp",
        "width": 480,
        "height": 719,
        "nota": null,
        "section": null
      },
      {
        "cod": "42",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/42.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/42-p.webp",
        "width": 346,
        "height": 474,
        "nota": null,
        "section": null
      },
      {
        "cod": "43",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/43.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/43-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "44",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/44.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/44-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "45",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/45.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/45-p.webp",
        "width": 480,
        "height": 657,
        "nota": null,
        "section": null
      },
      {
        "cod": "46",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/46.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/46-p.webp",
        "width": 480,
        "height": 839,
        "nota": null,
        "section": null
      },
      {
        "cod": "47",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/47.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/47-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "48",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/48.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/48-p.webp",
        "width": 480,
        "height": 631,
        "nota": null,
        "section": null
      },
      {
        "cod": "49",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/49.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/49-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "50",
        "cheia": "https://catalogo.ultreix.com/img/corporativo/50.webp",
        "thumb": "https://catalogo.ultreix.com/img/corporativo/50-p.webp",
        "width": 480,
        "height": 721,
        "nota": null,
        "section": null
      }
    ]
  },
  "casal": {
    "id": "casal",
    "title": "Ensaio de Casal",
    "metaTitle": "Ensaio de Casal · Catálogo",
    "contagem": "50 cenas · 01 — 50",
    "sub": "",
    "totalLabel": "50 cenas",
    "steps": [
      {
        "num": "I",
        "title": "Vejam as cenas",
        "desc": "Cada foto é uma direção de arte completa: figurino, luz, cenário e composição."
      },
      {
        "num": "II",
        "title": "Toquem para escolher",
        "desc": "O círculo no canto da foto marca a cena. Toque na foto para ver grande."
      },
      {
        "num": "III",
        "title": "Enviem os números",
        "desc": "Copie os números e cole na nossa conversa do WhatsApp."
      }
    ],
    "scenes": [
      {
        "cod": "01",
        "cheia": "https://catalogo.ultreix.com/img/casal/01.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/01-p.webp",
        "width": 480,
        "height": 703,
        "nota": null,
        "section": null
      },
      {
        "cod": "02",
        "cheia": "https://catalogo.ultreix.com/img/casal/02.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/02-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "03",
        "cheia": "https://catalogo.ultreix.com/img/casal/03.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/03-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "04",
        "cheia": "https://catalogo.ultreix.com/img/casal/04.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/04-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "05",
        "cheia": "https://catalogo.ultreix.com/img/casal/05.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/05-p.webp",
        "width": 480,
        "height": 861,
        "nota": null,
        "section": null
      },
      {
        "cod": "06",
        "cheia": "https://catalogo.ultreix.com/img/casal/06.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/06-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "07",
        "cheia": "https://catalogo.ultreix.com/img/casal/07.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/07-p.webp",
        "width": 480,
        "height": 831,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "08",
        "cheia": "https://catalogo.ultreix.com/img/casal/08.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/08-p.webp",
        "width": 480,
        "height": 696,
        "nota": null,
        "section": null
      },
      {
        "cod": "09",
        "cheia": "https://catalogo.ultreix.com/img/casal/09.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/09-p.webp",
        "width": 480,
        "height": 1005,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "10",
        "cheia": "https://catalogo.ultreix.com/img/casal/10.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/10-p.webp",
        "width": 480,
        "height": 657,
        "nota": null,
        "section": null
      },
      {
        "cod": "11",
        "cheia": "https://catalogo.ultreix.com/img/casal/11.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/11-p.webp",
        "width": 480,
        "height": 719,
        "nota": null,
        "section": null
      },
      {
        "cod": "12",
        "cheia": "https://catalogo.ultreix.com/img/casal/12.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/12-p.webp",
        "width": 480,
        "height": 725,
        "nota": null,
        "section": null
      },
      {
        "cod": "13",
        "cheia": "https://catalogo.ultreix.com/img/casal/13.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/13-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "14",
        "cheia": "https://catalogo.ultreix.com/img/casal/14.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/14-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "15",
        "cheia": "https://catalogo.ultreix.com/img/casal/15.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/15-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "16",
        "cheia": "https://catalogo.ultreix.com/img/casal/16.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/16-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "17",
        "cheia": "https://catalogo.ultreix.com/img/casal/17.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/17-p.webp",
        "width": 480,
        "height": 854,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "18",
        "cheia": "https://catalogo.ultreix.com/img/casal/18.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/18-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "19",
        "cheia": "https://catalogo.ultreix.com/img/casal/19.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/19-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "20",
        "cheia": "https://catalogo.ultreix.com/img/casal/20.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/20-p.webp",
        "width": 480,
        "height": 768,
        "nota": null,
        "section": null
      },
      {
        "cod": "21",
        "cheia": "https://catalogo.ultreix.com/img/casal/21.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/21-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "22",
        "cheia": "https://catalogo.ultreix.com/img/casal/22.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/22-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "23",
        "cheia": "https://catalogo.ultreix.com/img/casal/23.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/23-p.webp",
        "width": 480,
        "height": 643,
        "nota": null,
        "section": null
      },
      {
        "cod": "24",
        "cheia": "https://catalogo.ultreix.com/img/casal/24.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/24-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "25",
        "cheia": "https://catalogo.ultreix.com/img/casal/25.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/25-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "26",
        "cheia": "https://catalogo.ultreix.com/img/casal/26.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/26-p.webp",
        "width": 480,
        "height": 852,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "27",
        "cheia": "https://catalogo.ultreix.com/img/casal/27.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/27-p.webp",
        "width": 480,
        "height": 762,
        "nota": null,
        "section": null
      },
      {
        "cod": "28",
        "cheia": "https://catalogo.ultreix.com/img/casal/28.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/28-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "29",
        "cheia": "https://catalogo.ultreix.com/img/casal/29.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/29-p.webp",
        "width": 480,
        "height": 719,
        "nota": null,
        "section": null
      },
      {
        "cod": "30",
        "cheia": "https://catalogo.ultreix.com/img/casal/30.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/30-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "31",
        "cheia": "https://catalogo.ultreix.com/img/casal/31.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/31-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "32",
        "cheia": "https://catalogo.ultreix.com/img/casal/32.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/32-p.webp",
        "width": 480,
        "height": 1067,
        "nota": null,
        "section": null
      },
      {
        "cod": "33",
        "cheia": "https://catalogo.ultreix.com/img/casal/33.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/33-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "34",
        "cheia": "https://catalogo.ultreix.com/img/casal/34.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/34-p.webp",
        "width": 480,
        "height": 591,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "35",
        "cheia": "https://catalogo.ultreix.com/img/casal/35.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/35-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "36",
        "cheia": "https://catalogo.ultreix.com/img/casal/36.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/36-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "37",
        "cheia": "https://catalogo.ultreix.com/img/casal/37.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/37-p.webp",
        "width": 480,
        "height": 719,
        "nota": null,
        "section": null
      },
      {
        "cod": "38",
        "cheia": "https://catalogo.ultreix.com/img/casal/38.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/38-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "39",
        "cheia": "https://catalogo.ultreix.com/img/casal/39.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/39-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "40",
        "cheia": "https://catalogo.ultreix.com/img/casal/40.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/40-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "41",
        "cheia": "https://catalogo.ultreix.com/img/casal/41.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/41-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "42",
        "cheia": "https://catalogo.ultreix.com/img/casal/42.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/42-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "43",
        "cheia": "https://catalogo.ultreix.com/img/casal/43.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/43-p.webp",
        "width": 480,
        "height": 960,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "44",
        "cheia": "https://catalogo.ultreix.com/img/casal/44.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/44-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "45",
        "cheia": "https://catalogo.ultreix.com/img/casal/45.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/45-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "46",
        "cheia": "https://catalogo.ultreix.com/img/casal/46.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/46-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "47",
        "cheia": "https://catalogo.ultreix.com/img/casal/47.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/47-p.webp",
        "width": 480,
        "height": 852,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "48",
        "cheia": "https://catalogo.ultreix.com/img/casal/48.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/48-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "49",
        "cheia": "https://catalogo.ultreix.com/img/casal/49.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/49-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "50",
        "cheia": "https://catalogo.ultreix.com/img/casal/50.webp",
        "thumb": "https://catalogo.ultreix.com/img/casal/50-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": null
      }
    ]
  },
  "infantil": {
    "id": "infantil",
    "title": "Ensaio Infantil",
    "metaTitle": "Ensaio Infantil · Catálogo",
    "contagem": "Meninas F01 — F25 · Meninos M01 — M25",
    "sub": "Meninas e meninos, com os códigos F e M.",
    "totalLabel": "50 cenas",
    "steps": [
      {
        "num": "I",
        "title": "Veja as cenas",
        "desc": "Meninas de F01 a F25, meninos de M01 a M25."
      },
      {
        "num": "II",
        "title": "Toque para escolher",
        "desc": "O círculo no canto da foto marca a cena. Toque na foto para ver grande."
      },
      {
        "num": "III",
        "title": "Envie os códigos",
        "desc": "Copie os códigos e cole na nossa conversa do WhatsApp."
      }
    ],
    "scenes": [
      {
        "cod": "F01",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F01.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F01-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F02",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F02.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F02-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F03",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F03.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F03-p.webp",
        "width": 480,
        "height": 784,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F04",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F04.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F04-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F05",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F05.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F05-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F06",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F06.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F06-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F07",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F07.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F07-p.webp",
        "width": 480,
        "height": 664,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F08",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F08.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F08-p.webp",
        "width": 480,
        "height": 646,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F09",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F09.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F09-p.webp",
        "width": 480,
        "height": 677,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F10",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F10.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F10-p.webp",
        "width": 480,
        "height": 658,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F11",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F11.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F11-p.webp",
        "width": 480,
        "height": 657,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F12",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F12.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F12-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F13",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F13.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F13-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F14",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F14.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F14-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F15",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F15.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F15-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F16",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F16.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F16-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F17",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F17.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F17-p.webp",
        "width": 480,
        "height": 657,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F18",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F18.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F18-p.webp",
        "width": 438,
        "height": 673,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F19",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F19.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F19-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F20",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F20.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F20-p.webp",
        "width": 480,
        "height": 791,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F21",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F21.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F21-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F22",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F22.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F22-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F23",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F23.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F23-p.webp",
        "width": 480,
        "height": 852,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F24",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F24.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F24-p.webp",
        "width": 480,
        "height": 704,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F25",
        "cheia": "https://catalogo.ultreix.com/img/infantil/F25.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/F25-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "M01",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M01.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M01-p.webp",
        "width": 438,
        "height": 657,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M02",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M02.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M02-p.webp",
        "width": 480,
        "height": 852,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M03",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M03.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M03-p.webp",
        "width": 480,
        "height": 616,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M04",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M04.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M04-p.webp",
        "width": 480,
        "height": 853,
        "nota": "traje de herói exclusivo",
        "section": "meninos"
      },
      {
        "cod": "M05",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M05.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M05-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M06",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M06.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M06-p.webp",
        "width": 480,
        "height": 657,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M07",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M07.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M07-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M08",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M08.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M08-p.webp",
        "width": 480,
        "height": 840,
        "nota": "traje de herói exclusivo",
        "section": "meninos"
      },
      {
        "cod": "M09",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M09.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M09-p.webp",
        "width": 480,
        "height": 640,
        "nota": "uniforme sem marca · número = idade",
        "section": "meninos"
      },
      {
        "cod": "M10",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M10.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M10-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M11",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M11.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M11-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M12",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M12.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M12-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M13",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M13.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M13-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M14",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M14.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M14-p.webp",
        "width": 480,
        "height": 768,
        "nota": "uniforme sem marca · número = idade",
        "section": "meninos"
      },
      {
        "cod": "M15",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M15.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M15-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M16",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M16.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M16-p.webp",
        "width": 480,
        "height": 853,
        "nota": "com a mamãe · traje de herói exclusivo",
        "section": "meninos"
      },
      {
        "cod": "M17",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M17.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M17-p.webp",
        "width": 480,
        "height": 724,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M18",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M18.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M18-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M19",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M19.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M19-p.webp",
        "width": 480,
        "height": 673,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M20",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M20.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M20-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M21",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M21.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M21-p.webp",
        "width": 480,
        "height": 852,
        "nota": "tema Dino Park",
        "section": "meninos"
      },
      {
        "cod": "M22",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M22.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M22-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M23",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M23.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M23-p.webp",
        "width": 480,
        "height": 642,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M24",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M24.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M24-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M25",
        "cheia": "https://catalogo.ultreix.com/img/infantil/M25.webp",
        "thumb": "https://catalogo.ultreix.com/img/infantil/M25-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninos"
      }
    ]
  },
  "casual": {
    "id": "casual",
    "title": "Ensaio Casual",
    "metaTitle": "Ensaio Casual · Catálogo",
    "contagem": "49 cenas · 01 — 49",
    "sub": "",
    "totalLabel": "49 cenas",
    "steps": [
      {
        "num": "I",
        "title": "Veja as cenas",
        "desc": "Cada foto é uma direção de arte completa: figurino, luz, cenário e composição."
      },
      {
        "num": "II",
        "title": "Toque para escolher",
        "desc": "O círculo no canto da foto marca a cena. Toque na foto para ver grande."
      },
      {
        "num": "III",
        "title": "Envie os números",
        "desc": "Copie os números e cole na nossa conversa do WhatsApp."
      }
    ],
    "scenes": [
      {
        "cod": "01",
        "cheia": "https://catalogo.ultreix.com/img/casual/01.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/01-p.webp",
        "width": 480,
        "height": 554,
        "nota": null,
        "section": null
      },
      {
        "cod": "02",
        "cheia": "https://catalogo.ultreix.com/img/casual/02.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/02-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "03",
        "cheia": "https://catalogo.ultreix.com/img/casual/03.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/03-p.webp",
        "width": 480,
        "height": 679,
        "nota": null,
        "section": null
      },
      {
        "cod": "04",
        "cheia": "https://catalogo.ultreix.com/img/casual/04.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/04-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "05",
        "cheia": "https://catalogo.ultreix.com/img/casual/05.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/05-p.webp",
        "width": 480,
        "height": 787,
        "nota": null,
        "section": null
      },
      {
        "cod": "06",
        "cheia": "https://catalogo.ultreix.com/img/casual/06.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/06-p.webp",
        "width": 480,
        "height": 719,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "07",
        "cheia": "https://catalogo.ultreix.com/img/casual/07.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/07-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "08",
        "cheia": "https://catalogo.ultreix.com/img/casual/08.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/08-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "09",
        "cheia": "https://catalogo.ultreix.com/img/casual/09.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/09-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "10",
        "cheia": "https://catalogo.ultreix.com/img/casual/10.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/10-p.webp",
        "width": 480,
        "height": 1005,
        "nota": null,
        "section": null
      },
      {
        "cod": "11",
        "cheia": "https://catalogo.ultreix.com/img/casual/11.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/11-p.webp",
        "width": 480,
        "height": 643,
        "nota": null,
        "section": null
      },
      {
        "cod": "12",
        "cheia": "https://catalogo.ultreix.com/img/casual/12.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/12-p.webp",
        "width": 480,
        "height": 643,
        "nota": null,
        "section": null
      },
      {
        "cod": "13",
        "cheia": "https://catalogo.ultreix.com/img/casual/13.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/13-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "14",
        "cheia": "https://catalogo.ultreix.com/img/casual/14.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/14-p.webp",
        "width": 480,
        "height": 657,
        "nota": null,
        "section": null
      },
      {
        "cod": "15",
        "cheia": "https://catalogo.ultreix.com/img/casual/15.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/15-p.webp",
        "width": 480,
        "height": 861,
        "nota": null,
        "section": null
      },
      {
        "cod": "16",
        "cheia": "https://catalogo.ultreix.com/img/casual/16.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/16-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "17",
        "cheia": "https://catalogo.ultreix.com/img/casual/17.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/17-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "18",
        "cheia": "https://catalogo.ultreix.com/img/casual/18.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/18-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "19",
        "cheia": "https://catalogo.ultreix.com/img/casual/19.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/19-p.webp",
        "width": 480,
        "height": 856,
        "nota": null,
        "section": null
      },
      {
        "cod": "20",
        "cheia": "https://catalogo.ultreix.com/img/casual/20.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/20-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "21",
        "cheia": "https://catalogo.ultreix.com/img/casual/21.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/21-p.webp",
        "width": 480,
        "height": 844,
        "nota": null,
        "section": null
      },
      {
        "cod": "22",
        "cheia": "https://catalogo.ultreix.com/img/casual/22.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/22-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "23",
        "cheia": "https://catalogo.ultreix.com/img/casual/23.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/23-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "24",
        "cheia": "https://catalogo.ultreix.com/img/casual/24.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/24-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "25",
        "cheia": "https://catalogo.ultreix.com/img/casual/25.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/25-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "26",
        "cheia": "https://catalogo.ultreix.com/img/casual/26.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/26-p.webp",
        "width": 480,
        "height": 918,
        "nota": null,
        "section": null
      },
      {
        "cod": "27",
        "cheia": "https://catalogo.ultreix.com/img/casual/27.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/27-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "28",
        "cheia": "https://catalogo.ultreix.com/img/casual/28.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/28-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "29",
        "cheia": "https://catalogo.ultreix.com/img/casual/29.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/29-p.webp",
        "width": 480,
        "height": 850,
        "nota": null,
        "section": null
      },
      {
        "cod": "30",
        "cheia": "https://catalogo.ultreix.com/img/casual/30.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/30-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "31",
        "cheia": "https://catalogo.ultreix.com/img/casual/31.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/31-p.webp",
        "width": 480,
        "height": 856,
        "nota": null,
        "section": null
      },
      {
        "cod": "32",
        "cheia": "https://catalogo.ultreix.com/img/casual/32.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/32-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "33",
        "cheia": "https://catalogo.ultreix.com/img/casual/33.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/33-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "34",
        "cheia": "https://catalogo.ultreix.com/img/casual/34.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/34-p.webp",
        "width": 480,
        "height": 840,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "35",
        "cheia": "https://catalogo.ultreix.com/img/casual/35.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/35-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "36",
        "cheia": "https://catalogo.ultreix.com/img/casual/36.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/36-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "37",
        "cheia": "https://catalogo.ultreix.com/img/casual/37.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/37-p.webp",
        "width": 376,
        "height": 558,
        "nota": null,
        "section": null
      },
      {
        "cod": "38",
        "cheia": "https://catalogo.ultreix.com/img/casual/38.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/38-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "39",
        "cheia": "https://catalogo.ultreix.com/img/casual/39.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/39-p.webp",
        "width": 480,
        "height": 599,
        "nota": null,
        "section": null
      },
      {
        "cod": "40",
        "cheia": "https://catalogo.ultreix.com/img/casual/40.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/40-p.webp",
        "width": 480,
        "height": 544,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "41",
        "cheia": "https://catalogo.ultreix.com/img/casual/41.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/41-p.webp",
        "width": 480,
        "height": 852,
        "nota": null,
        "section": null
      },
      {
        "cod": "42",
        "cheia": "https://catalogo.ultreix.com/img/casual/42.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/42-p.webp",
        "width": 480,
        "height": 768,
        "nota": null,
        "section": null
      },
      {
        "cod": "43",
        "cheia": "https://catalogo.ultreix.com/img/casual/43.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/43-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "44",
        "cheia": "https://catalogo.ultreix.com/img/casual/44.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/44-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "45",
        "cheia": "https://catalogo.ultreix.com/img/casual/45.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/45-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "46",
        "cheia": "https://catalogo.ultreix.com/img/casual/46.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/46-p.webp",
        "width": 480,
        "height": 768,
        "nota": null,
        "section": null
      },
      {
        "cod": "47",
        "cheia": "https://catalogo.ultreix.com/img/casual/47.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/47-p.webp",
        "width": 480,
        "height": 658,
        "nota": null,
        "section": null
      },
      {
        "cod": "48",
        "cheia": "https://catalogo.ultreix.com/img/casual/48.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/48-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "49",
        "cheia": "https://catalogo.ultreix.com/img/casual/49.webp",
        "thumb": "https://catalogo.ultreix.com/img/casual/49-p.webp",
        "width": 480,
        "height": 852,
        "nota": null,
        "section": null
      }
    ]
  },
  "sensual": {
    "id": "sensual",
    "title": "Ensaio Sensual",
    "metaTitle": "Ensaio Sensual · Catálogo",
    "contagem": "49 cenas · 01 — 49 · 18+",
    "sub": "Só para maiores de 18 anos.",
    "totalLabel": "49 cenas",
    "is18Plus": true,
    "steps": [
      {
        "num": "I",
        "title": "Veja as cenas",
        "desc": "Cada foto é uma direção de arte completa: figurino, luz, cenário e composição."
      },
      {
        "num": "II",
        "title": "Toque para escolher",
        "desc": "O círculo no canto da foto marca a cena. Toque na foto para ver grande."
      },
      {
        "num": "III",
        "title": "Envie os números",
        "desc": "Copie os números e cole na nossa conversa do WhatsApp."
      }
    ],
    "scenes": [
      {
        "cod": "01",
        "cheia": "https://catalogo.ultreix.com/img/sensual/01.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/01-p.webp",
        "width": 480,
        "height": 599,
        "nota": null,
        "section": null
      },
      {
        "cod": "02",
        "cheia": "https://catalogo.ultreix.com/img/sensual/02.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/02-p.webp",
        "width": 480,
        "height": 580,
        "nota": null,
        "section": null
      },
      {
        "cod": "03",
        "cheia": "https://catalogo.ultreix.com/img/sensual/03.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/03-p.webp",
        "width": 480,
        "height": 600,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "04",
        "cheia": "https://catalogo.ultreix.com/img/sensual/04.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/04-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "05",
        "cheia": "https://catalogo.ultreix.com/img/sensual/05.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/05-p.webp",
        "width": 434,
        "height": 550,
        "nota": null,
        "section": null
      },
      {
        "cod": "06",
        "cheia": "https://catalogo.ultreix.com/img/sensual/06.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/06-p.webp",
        "width": 480,
        "height": 598,
        "nota": null,
        "section": null
      },
      {
        "cod": "07",
        "cheia": "https://catalogo.ultreix.com/img/sensual/07.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/07-p.webp",
        "width": 480,
        "height": 599,
        "nota": null,
        "section": null
      },
      {
        "cod": "08",
        "cheia": "https://catalogo.ultreix.com/img/sensual/08.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/08-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "09",
        "cheia": "https://catalogo.ultreix.com/img/sensual/09.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/09-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "10",
        "cheia": "https://catalogo.ultreix.com/img/sensual/10.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/10-p.webp",
        "width": 480,
        "height": 600,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "11",
        "cheia": "https://catalogo.ultreix.com/img/sensual/11.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/11-p.webp",
        "width": 480,
        "height": 636,
        "nota": "versão com bralette",
        "section": null
      },
      {
        "cod": "12",
        "cheia": "https://catalogo.ultreix.com/img/sensual/12.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/12-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "13",
        "cheia": "https://catalogo.ultreix.com/img/sensual/13.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/13-p.webp",
        "width": 480,
        "height": 585,
        "nota": "versão com bralette",
        "section": null
      },
      {
        "cod": "14",
        "cheia": "https://catalogo.ultreix.com/img/sensual/14.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/14-p.webp",
        "width": 480,
        "height": 856,
        "nota": "versão com bralette",
        "section": null
      },
      {
        "cod": "15",
        "cheia": "https://catalogo.ultreix.com/img/sensual/15.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/15-p.webp",
        "width": 480,
        "height": 654,
        "nota": null,
        "section": null
      },
      {
        "cod": "16",
        "cheia": "https://catalogo.ultreix.com/img/sensual/16.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/16-p.webp",
        "width": 480,
        "height": 600,
        "nota": "versão com bralette",
        "section": null
      },
      {
        "cod": "17",
        "cheia": "https://catalogo.ultreix.com/img/sensual/17.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/17-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "18",
        "cheia": "https://catalogo.ultreix.com/img/sensual/18.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/18-p.webp",
        "width": 480,
        "height": 600,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "19",
        "cheia": "https://catalogo.ultreix.com/img/sensual/19.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/19-p.webp",
        "width": 480,
        "height": 590,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "20",
        "cheia": "https://catalogo.ultreix.com/img/sensual/20.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/20-p.webp",
        "width": 480,
        "height": 678,
        "nota": "preto & branco · versão com bandeau",
        "section": null
      },
      {
        "cod": "21",
        "cheia": "https://catalogo.ultreix.com/img/sensual/21.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/21-p.webp",
        "width": 480,
        "height": 721,
        "nota": null,
        "section": null
      },
      {
        "cod": "22",
        "cheia": "https://catalogo.ultreix.com/img/sensual/22.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/22-p.webp",
        "width": 480,
        "height": 563,
        "nota": null,
        "section": null
      },
      {
        "cod": "23",
        "cheia": "https://catalogo.ultreix.com/img/sensual/23.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/23-p.webp",
        "width": 480,
        "height": 574,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "24",
        "cheia": "https://catalogo.ultreix.com/img/sensual/24.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/24-p.webp",
        "width": 347,
        "height": 519,
        "nota": null,
        "section": null
      },
      {
        "cod": "25",
        "cheia": "https://catalogo.ultreix.com/img/sensual/25.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/25-p.webp",
        "width": 480,
        "height": 693,
        "nota": null,
        "section": null
      },
      {
        "cod": "26",
        "cheia": "https://catalogo.ultreix.com/img/sensual/26.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/26-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "27",
        "cheia": "https://catalogo.ultreix.com/img/sensual/27.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/27-p.webp",
        "width": 480,
        "height": 720,
        "nota": "versão com body de renda",
        "section": null
      },
      {
        "cod": "28",
        "cheia": "https://catalogo.ultreix.com/img/sensual/28.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/28-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco · versão com calcinha",
        "section": null
      },
      {
        "cod": "29",
        "cheia": "https://catalogo.ultreix.com/img/sensual/29.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/29-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "30",
        "cheia": "https://catalogo.ultreix.com/img/sensual/30.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/30-p.webp",
        "width": 480,
        "height": 640,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "31",
        "cheia": "https://catalogo.ultreix.com/img/sensual/31.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/31-p.webp",
        "width": 480,
        "height": 853,
        "nota": "versão com forro",
        "section": null
      },
      {
        "cod": "32",
        "cheia": "https://catalogo.ultreix.com/img/sensual/32.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/32-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "33",
        "cheia": "https://catalogo.ultreix.com/img/sensual/33.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/33-p.webp",
        "width": 480,
        "height": 720,
        "nota": "versão com forro",
        "section": null
      },
      {
        "cod": "34",
        "cheia": "https://catalogo.ultreix.com/img/sensual/34.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/34-p.webp",
        "width": 480,
        "height": 617,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "35",
        "cheia": "https://catalogo.ultreix.com/img/sensual/35.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/35-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "36",
        "cheia": "https://catalogo.ultreix.com/img/sensual/36.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/36-p.webp",
        "width": 480,
        "height": 720,
        "nota": "versão com body",
        "section": null
      },
      {
        "cod": "37",
        "cheia": "https://catalogo.ultreix.com/img/sensual/37.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/37-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "38",
        "cheia": "https://catalogo.ultreix.com/img/sensual/38.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/38-p.webp",
        "width": 480,
        "height": 658,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "39",
        "cheia": "https://catalogo.ultreix.com/img/sensual/39.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/39-p.webp",
        "width": 480,
        "height": 594,
        "nota": null,
        "section": null
      },
      {
        "cod": "40",
        "cheia": "https://catalogo.ultreix.com/img/sensual/40.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/40-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "41",
        "cheia": "https://catalogo.ultreix.com/img/sensual/41.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/41-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "42",
        "cheia": "https://catalogo.ultreix.com/img/sensual/42.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/42-p.webp",
        "width": 480,
        "height": 704,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "43",
        "cheia": "https://catalogo.ultreix.com/img/sensual/43.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/43-p.webp",
        "width": 480,
        "height": 723,
        "nota": null,
        "section": null
      },
      {
        "cod": "44",
        "cheia": "https://catalogo.ultreix.com/img/sensual/44.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/44-p.webp",
        "width": 480,
        "height": 562,
        "nota": "versão com body por baixo",
        "section": null
      },
      {
        "cod": "45",
        "cheia": "https://catalogo.ultreix.com/img/sensual/45.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/45-p.webp",
        "width": 480,
        "height": 872,
        "nota": "versão com bralette",
        "section": null
      },
      {
        "cod": "46",
        "cheia": "https://catalogo.ultreix.com/img/sensual/46.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/46-p.webp",
        "width": 480,
        "height": 852,
        "nota": null,
        "section": null
      },
      {
        "cod": "47",
        "cheia": "https://catalogo.ultreix.com/img/sensual/47.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/47-p.webp",
        "width": 480,
        "height": 663,
        "nota": null,
        "section": null
      },
      {
        "cod": "48",
        "cheia": "https://catalogo.ultreix.com/img/sensual/48.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/48-p.webp",
        "width": 480,
        "height": 721,
        "nota": null,
        "section": null
      },
      {
        "cod": "49",
        "cheia": "https://catalogo.ultreix.com/img/sensual/49.webp",
        "thumb": "https://catalogo.ultreix.com/img/sensual/49-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco",
        "section": null
      }
    ]
  }
};

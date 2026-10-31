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
        "cheia": "/img/aniversario/01.webp",
        "thumb": "/img/aniversario/01-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "02",
        "cheia": "/img/aniversario/02.webp",
        "thumb": "/img/aniversario/02-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "03",
        "cheia": "/img/aniversario/03.webp",
        "thumb": "/img/aniversario/03-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "04",
        "cheia": "/img/aniversario/04.webp",
        "thumb": "/img/aniversario/04-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "05",
        "cheia": "/img/aniversario/05.webp",
        "thumb": "/img/aniversario/05-p.webp",
        "width": 480,
        "height": 589,
        "nota": null,
        "section": null
      },
      {
        "cod": "06",
        "cheia": "/img/aniversario/06.webp",
        "thumb": "/img/aniversario/06-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": null
      },
      {
        "cod": "07",
        "cheia": "/img/aniversario/07.webp",
        "thumb": "/img/aniversario/07-p.webp",
        "width": 480,
        "height": 599,
        "nota": null,
        "section": null
      },
      {
        "cod": "08",
        "cheia": "/img/aniversario/08.webp",
        "thumb": "/img/aniversario/08-p.webp",
        "width": 480,
        "height": 856,
        "nota": null,
        "section": null
      },
      {
        "cod": "09",
        "cheia": "/img/aniversario/09.webp",
        "thumb": "/img/aniversario/09-p.webp",
        "width": 480,
        "height": 644,
        "nota": null,
        "section": null
      },
      {
        "cod": "10",
        "cheia": "/img/aniversario/10.webp",
        "thumb": "/img/aniversario/10-p.webp",
        "width": 480,
        "height": 625,
        "nota": null,
        "section": null
      },
      {
        "cod": "11",
        "cheia": "/img/aniversario/11.webp",
        "thumb": "/img/aniversario/11-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "12",
        "cheia": "/img/aniversario/12.webp",
        "thumb": "/img/aniversario/12-p.webp",
        "width": 480,
        "height": 841,
        "nota": null,
        "section": null
      },
      {
        "cod": "13",
        "cheia": "/img/aniversario/13.webp",
        "thumb": "/img/aniversario/13-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "14",
        "cheia": "/img/aniversario/14.webp",
        "thumb": "/img/aniversario/14-p.webp",
        "width": 480,
        "height": 626,
        "nota": null,
        "section": null
      },
      {
        "cod": "15",
        "cheia": "/img/aniversario/15.webp",
        "thumb": "/img/aniversario/15-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "16",
        "cheia": "/img/aniversario/16.webp",
        "thumb": "/img/aniversario/16-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "17",
        "cheia": "/img/aniversario/17.webp",
        "thumb": "/img/aniversario/17-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "18",
        "cheia": "/img/aniversario/18.webp",
        "thumb": "/img/aniversario/18-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "19",
        "cheia": "/img/aniversario/19.webp",
        "thumb": "/img/aniversario/19-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "20",
        "cheia": "/img/aniversario/20.webp",
        "thumb": "/img/aniversario/20-p.webp",
        "width": 480,
        "height": 716,
        "nota": null,
        "section": null
      },
      {
        "cod": "21",
        "cheia": "/img/aniversario/21.webp",
        "thumb": "/img/aniversario/21-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "22",
        "cheia": "/img/aniversario/22.webp",
        "thumb": "/img/aniversario/22-p.webp",
        "width": 480,
        "height": 856,
        "nota": null,
        "section": null
      },
      {
        "cod": "23",
        "cheia": "/img/aniversario/23.webp",
        "thumb": "/img/aniversario/23-p.webp",
        "width": 480,
        "height": 594,
        "nota": null,
        "section": null
      },
      {
        "cod": "24",
        "cheia": "/img/aniversario/24.webp",
        "thumb": "/img/aniversario/24-p.webp",
        "width": 480,
        "height": 597,
        "nota": null,
        "section": null
      },
      {
        "cod": "25",
        "cheia": "/img/aniversario/25.webp",
        "thumb": "/img/aniversario/25-p.webp",
        "width": 480,
        "height": 657,
        "nota": null,
        "section": null
      },
      {
        "cod": "26",
        "cheia": "/img/aniversario/26.webp",
        "thumb": "/img/aniversario/26-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "27",
        "cheia": "/img/aniversario/27.webp",
        "thumb": "/img/aniversario/27-p.webp",
        "width": 480,
        "height": 640,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "28",
        "cheia": "/img/aniversario/28.webp",
        "thumb": "/img/aniversario/28-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "29",
        "cheia": "/img/aniversario/29.webp",
        "thumb": "/img/aniversario/29-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": null
      },
      {
        "cod": "30",
        "cheia": "/img/aniversario/30.webp",
        "thumb": "/img/aniversario/30-p.webp",
        "width": 480,
        "height": 680,
        "nota": null,
        "section": null
      },
      {
        "cod": "31",
        "cheia": "/img/aniversario/31.webp",
        "thumb": "/img/aniversario/31-p.webp",
        "width": 480,
        "height": 841,
        "nota": null,
        "section": null
      },
      {
        "cod": "32",
        "cheia": "/img/aniversario/32.webp",
        "thumb": "/img/aniversario/32-p.webp",
        "width": 480,
        "height": 841,
        "nota": null,
        "section": null
      },
      {
        "cod": "33",
        "cheia": "/img/aniversario/33.webp",
        "thumb": "/img/aniversario/33-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "34",
        "cheia": "/img/aniversario/34.webp",
        "thumb": "/img/aniversario/34-p.webp",
        "width": 480,
        "height": 658,
        "nota": null,
        "section": null
      },
      {
        "cod": "35",
        "cheia": "/img/aniversario/35.webp",
        "thumb": "/img/aniversario/35-p.webp",
        "width": 480,
        "height": 598,
        "nota": null,
        "section": null
      },
      {
        "cod": "36",
        "cheia": "/img/aniversario/36.webp",
        "thumb": "/img/aniversario/36-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": null
      },
      {
        "cod": "37",
        "cheia": "/img/aniversario/37.webp",
        "thumb": "/img/aniversario/37-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "38",
        "cheia": "/img/aniversario/38.webp",
        "thumb": "/img/aniversario/38-p.webp",
        "width": 480,
        "height": 657,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "39",
        "cheia": "/img/aniversario/39.webp",
        "thumb": "/img/aniversario/39-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "40",
        "cheia": "/img/aniversario/40.webp",
        "thumb": "/img/aniversario/40-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "41",
        "cheia": "/img/aniversario/41.webp",
        "thumb": "/img/aniversario/41-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "42",
        "cheia": "/img/aniversario/42.webp",
        "thumb": "/img/aniversario/42-p.webp",
        "width": 480,
        "height": 640,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "43",
        "cheia": "/img/aniversario/43.webp",
        "thumb": "/img/aniversario/43-p.webp",
        "width": 480,
        "height": 702,
        "nota": null,
        "section": null
      },
      {
        "cod": "44",
        "cheia": "/img/aniversario/44.webp",
        "thumb": "/img/aniversario/44-p.webp",
        "width": 480,
        "height": 658,
        "nota": null,
        "section": null
      },
      {
        "cod": "45",
        "cheia": "/img/aniversario/45.webp",
        "thumb": "/img/aniversario/45-p.webp",
        "width": 480,
        "height": 719,
        "nota": null,
        "section": null
      },
      {
        "cod": "46",
        "cheia": "/img/aniversario/46.webp",
        "thumb": "/img/aniversario/46-p.webp",
        "width": 480,
        "height": 603,
        "nota": null,
        "section": null
      },
      {
        "cod": "47",
        "cheia": "/img/aniversario/47.webp",
        "thumb": "/img/aniversario/47-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "48",
        "cheia": "/img/aniversario/48.webp",
        "thumb": "/img/aniversario/48-p.webp",
        "width": 480,
        "height": 723,
        "nota": null,
        "section": null
      },
      {
        "cod": "49",
        "cheia": "/img/aniversario/49.webp",
        "thumb": "/img/aniversario/49-p.webp",
        "width": 480,
        "height": 678,
        "nota": null,
        "section": null
      },
      {
        "cod": "50",
        "cheia": "/img/aniversario/50.webp",
        "thumb": "/img/aniversario/50-p.webp",
        "width": 480,
        "height": 723,
        "nota": null,
        "section": null
      },
      {
        "cod": "51",
        "cheia": "/img/aniversario/51.webp",
        "thumb": "/img/aniversario/51-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "52",
        "cheia": "/img/aniversario/52.webp",
        "thumb": "/img/aniversario/52-p.webp",
        "width": 480,
        "height": 641,
        "nota": null,
        "section": null
      },
      {
        "cod": "53",
        "cheia": "/img/aniversario/53.webp",
        "thumb": "/img/aniversario/53-p.webp",
        "width": 480,
        "height": 579,
        "nota": null,
        "section": null
      },
      {
        "cod": "54",
        "cheia": "/img/aniversario/54.webp",
        "thumb": "/img/aniversario/54-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "55",
        "cheia": "/img/aniversario/55.webp",
        "thumb": "/img/aniversario/55-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "56",
        "cheia": "/img/aniversario/56.webp",
        "thumb": "/img/aniversario/56-p.webp",
        "width": 480,
        "height": 686,
        "nota": null,
        "section": null
      },
      {
        "cod": "57",
        "cheia": "/img/aniversario/57.webp",
        "thumb": "/img/aniversario/57-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": null
      },
      {
        "cod": "58",
        "cheia": "/img/aniversario/58.webp",
        "thumb": "/img/aniversario/58-p.webp",
        "width": 480,
        "height": 719,
        "nota": null,
        "section": null
      },
      {
        "cod": "59",
        "cheia": "/img/aniversario/59.webp",
        "thumb": "/img/aniversario/59-p.webp",
        "width": 480,
        "height": 732,
        "nota": null,
        "section": null
      },
      {
        "cod": "60",
        "cheia": "/img/aniversario/60.webp",
        "thumb": "/img/aniversario/60-p.webp",
        "width": 480,
        "height": 644,
        "nota": null,
        "section": null
      },
      {
        "cod": "61",
        "cheia": "/img/aniversario/61.webp",
        "thumb": "/img/aniversario/61-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "62",
        "cheia": "/img/aniversario/62.webp",
        "thumb": "/img/aniversario/62-p.webp",
        "width": 480,
        "height": 852,
        "nota": null,
        "section": null
      },
      {
        "cod": "63",
        "cheia": "/img/aniversario/63.webp",
        "thumb": "/img/aniversario/63-p.webp",
        "width": 480,
        "height": 852,
        "nota": null,
        "section": null
      },
      {
        "cod": "64",
        "cheia": "/img/aniversario/64.webp",
        "thumb": "/img/aniversario/64-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "65",
        "cheia": "/img/aniversario/65.webp",
        "thumb": "/img/aniversario/65-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "66",
        "cheia": "/img/aniversario/66.webp",
        "thumb": "/img/aniversario/66-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "67",
        "cheia": "/img/aniversario/67.webp",
        "thumb": "/img/aniversario/67-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "68",
        "cheia": "/img/aniversario/68.webp",
        "thumb": "/img/aniversario/68-p.webp",
        "width": 480,
        "height": 640,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "69",
        "cheia": "/img/aniversario/69.webp",
        "thumb": "/img/aniversario/69-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "70",
        "cheia": "/img/aniversario/70.webp",
        "thumb": "/img/aniversario/70-p.webp",
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
        "cheia": "/img/corporativo/01.webp",
        "thumb": "/img/corporativo/01-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "02",
        "cheia": "/img/corporativo/02.webp",
        "thumb": "/img/corporativo/02-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "03",
        "cheia": "/img/corporativo/03.webp",
        "thumb": "/img/corporativo/03-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": null
      },
      {
        "cod": "04",
        "cheia": "/img/corporativo/04.webp",
        "thumb": "/img/corporativo/04-p.webp",
        "width": 480,
        "height": 682,
        "nota": null,
        "section": null
      },
      {
        "cod": "05",
        "cheia": "/img/corporativo/05.webp",
        "thumb": "/img/corporativo/05-p.webp",
        "width": 480,
        "height": 719,
        "nota": null,
        "section": null
      },
      {
        "cod": "06",
        "cheia": "/img/corporativo/06.webp",
        "thumb": "/img/corporativo/06-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "07",
        "cheia": "/img/corporativo/07.webp",
        "thumb": "/img/corporativo/07-p.webp",
        "width": 480,
        "height": 911,
        "nota": null,
        "section": null
      },
      {
        "cod": "08",
        "cheia": "/img/corporativo/08.webp",
        "thumb": "/img/corporativo/08-p.webp",
        "width": 480,
        "height": 715,
        "nota": null,
        "section": null
      },
      {
        "cod": "09",
        "cheia": "/img/corporativo/09.webp",
        "thumb": "/img/corporativo/09-p.webp",
        "width": 480,
        "height": 768,
        "nota": null,
        "section": null
      },
      {
        "cod": "10",
        "cheia": "/img/corporativo/10.webp",
        "thumb": "/img/corporativo/10-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "11",
        "cheia": "/img/corporativo/11.webp",
        "thumb": "/img/corporativo/11-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "12",
        "cheia": "/img/corporativo/12.webp",
        "thumb": "/img/corporativo/12-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "13",
        "cheia": "/img/corporativo/13.webp",
        "thumb": "/img/corporativo/13-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "14",
        "cheia": "/img/corporativo/14.webp",
        "thumb": "/img/corporativo/14-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "15",
        "cheia": "/img/corporativo/15.webp",
        "thumb": "/img/corporativo/15-p.webp",
        "width": 480,
        "height": 860,
        "nota": null,
        "section": null
      },
      {
        "cod": "16",
        "cheia": "/img/corporativo/16.webp",
        "thumb": "/img/corporativo/16-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "17",
        "cheia": "/img/corporativo/17.webp",
        "thumb": "/img/corporativo/17-p.webp",
        "width": 416,
        "height": 740,
        "nota": null,
        "section": null
      },
      {
        "cod": "18",
        "cheia": "/img/corporativo/18.webp",
        "thumb": "/img/corporativo/18-p.webp",
        "width": 480,
        "height": 758,
        "nota": null,
        "section": null
      },
      {
        "cod": "19",
        "cheia": "/img/corporativo/19.webp",
        "thumb": "/img/corporativo/19-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "20",
        "cheia": "/img/corporativo/20.webp",
        "thumb": "/img/corporativo/20-p.webp",
        "width": 480,
        "height": 768,
        "nota": null,
        "section": null
      },
      {
        "cod": "21",
        "cheia": "/img/corporativo/21.webp",
        "thumb": "/img/corporativo/21-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "22",
        "cheia": "/img/corporativo/22.webp",
        "thumb": "/img/corporativo/22-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "23",
        "cheia": "/img/corporativo/23.webp",
        "thumb": "/img/corporativo/23-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "24",
        "cheia": "/img/corporativo/24.webp",
        "thumb": "/img/corporativo/24-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "25",
        "cheia": "/img/corporativo/25.webp",
        "thumb": "/img/corporativo/25-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "26",
        "cheia": "/img/corporativo/26.webp",
        "thumb": "/img/corporativo/26-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "27",
        "cheia": "/img/corporativo/27.webp",
        "thumb": "/img/corporativo/27-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "28",
        "cheia": "/img/corporativo/28.webp",
        "thumb": "/img/corporativo/28-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "29",
        "cheia": "/img/corporativo/29.webp",
        "thumb": "/img/corporativo/29-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "30",
        "cheia": "/img/corporativo/30.webp",
        "thumb": "/img/corporativo/30-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "31",
        "cheia": "/img/corporativo/31.webp",
        "thumb": "/img/corporativo/31-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "32",
        "cheia": "/img/corporativo/32.webp",
        "thumb": "/img/corporativo/32-p.webp",
        "width": 480,
        "height": 597,
        "nota": null,
        "section": null
      },
      {
        "cod": "33",
        "cheia": "/img/corporativo/33.webp",
        "thumb": "/img/corporativo/33-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "34",
        "cheia": "/img/corporativo/34.webp",
        "thumb": "/img/corporativo/34-p.webp",
        "width": 480,
        "height": 641,
        "nota": null,
        "section": null
      },
      {
        "cod": "35",
        "cheia": "/img/corporativo/35.webp",
        "thumb": "/img/corporativo/35-p.webp",
        "width": 480,
        "height": 673,
        "nota": null,
        "section": null
      },
      {
        "cod": "36",
        "cheia": "/img/corporativo/36.webp",
        "thumb": "/img/corporativo/36-p.webp",
        "width": 480,
        "height": 608,
        "nota": null,
        "section": null
      },
      {
        "cod": "37",
        "cheia": "/img/corporativo/37.webp",
        "thumb": "/img/corporativo/37-p.webp",
        "width": 480,
        "height": 881,
        "nota": null,
        "section": null
      },
      {
        "cod": "38",
        "cheia": "/img/corporativo/38.webp",
        "thumb": "/img/corporativo/38-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": null
      },
      {
        "cod": "39",
        "cheia": "/img/corporativo/39.webp",
        "thumb": "/img/corporativo/39-p.webp",
        "width": 480,
        "height": 807,
        "nota": null,
        "section": null
      },
      {
        "cod": "40",
        "cheia": "/img/corporativo/40.webp",
        "thumb": "/img/corporativo/40-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "41",
        "cheia": "/img/corporativo/41.webp",
        "thumb": "/img/corporativo/41-p.webp",
        "width": 480,
        "height": 719,
        "nota": null,
        "section": null
      },
      {
        "cod": "42",
        "cheia": "/img/corporativo/42.webp",
        "thumb": "/img/corporativo/42-p.webp",
        "width": 346,
        "height": 474,
        "nota": null,
        "section": null
      },
      {
        "cod": "43",
        "cheia": "/img/corporativo/43.webp",
        "thumb": "/img/corporativo/43-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "44",
        "cheia": "/img/corporativo/44.webp",
        "thumb": "/img/corporativo/44-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "45",
        "cheia": "/img/corporativo/45.webp",
        "thumb": "/img/corporativo/45-p.webp",
        "width": 480,
        "height": 657,
        "nota": null,
        "section": null
      },
      {
        "cod": "46",
        "cheia": "/img/corporativo/46.webp",
        "thumb": "/img/corporativo/46-p.webp",
        "width": 480,
        "height": 839,
        "nota": null,
        "section": null
      },
      {
        "cod": "47",
        "cheia": "/img/corporativo/47.webp",
        "thumb": "/img/corporativo/47-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "48",
        "cheia": "/img/corporativo/48.webp",
        "thumb": "/img/corporativo/48-p.webp",
        "width": 480,
        "height": 631,
        "nota": null,
        "section": null
      },
      {
        "cod": "49",
        "cheia": "/img/corporativo/49.webp",
        "thumb": "/img/corporativo/49-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "50",
        "cheia": "/img/corporativo/50.webp",
        "thumb": "/img/corporativo/50-p.webp",
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
        "cheia": "/img/casal/01.webp",
        "thumb": "/img/casal/01-p.webp",
        "width": 480,
        "height": 703,
        "nota": null,
        "section": null
      },
      {
        "cod": "02",
        "cheia": "/img/casal/02.webp",
        "thumb": "/img/casal/02-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "03",
        "cheia": "/img/casal/03.webp",
        "thumb": "/img/casal/03-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "04",
        "cheia": "/img/casal/04.webp",
        "thumb": "/img/casal/04-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "05",
        "cheia": "/img/casal/05.webp",
        "thumb": "/img/casal/05-p.webp",
        "width": 480,
        "height": 861,
        "nota": null,
        "section": null
      },
      {
        "cod": "06",
        "cheia": "/img/casal/06.webp",
        "thumb": "/img/casal/06-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "07",
        "cheia": "/img/casal/07.webp",
        "thumb": "/img/casal/07-p.webp",
        "width": 480,
        "height": 831,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "08",
        "cheia": "/img/casal/08.webp",
        "thumb": "/img/casal/08-p.webp",
        "width": 480,
        "height": 696,
        "nota": null,
        "section": null
      },
      {
        "cod": "09",
        "cheia": "/img/casal/09.webp",
        "thumb": "/img/casal/09-p.webp",
        "width": 480,
        "height": 1005,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "10",
        "cheia": "/img/casal/10.webp",
        "thumb": "/img/casal/10-p.webp",
        "width": 480,
        "height": 657,
        "nota": null,
        "section": null
      },
      {
        "cod": "11",
        "cheia": "/img/casal/11.webp",
        "thumb": "/img/casal/11-p.webp",
        "width": 480,
        "height": 719,
        "nota": null,
        "section": null
      },
      {
        "cod": "12",
        "cheia": "/img/casal/12.webp",
        "thumb": "/img/casal/12-p.webp",
        "width": 480,
        "height": 725,
        "nota": null,
        "section": null
      },
      {
        "cod": "13",
        "cheia": "/img/casal/13.webp",
        "thumb": "/img/casal/13-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "14",
        "cheia": "/img/casal/14.webp",
        "thumb": "/img/casal/14-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "15",
        "cheia": "/img/casal/15.webp",
        "thumb": "/img/casal/15-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "16",
        "cheia": "/img/casal/16.webp",
        "thumb": "/img/casal/16-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "17",
        "cheia": "/img/casal/17.webp",
        "thumb": "/img/casal/17-p.webp",
        "width": 480,
        "height": 854,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "18",
        "cheia": "/img/casal/18.webp",
        "thumb": "/img/casal/18-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "19",
        "cheia": "/img/casal/19.webp",
        "thumb": "/img/casal/19-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "20",
        "cheia": "/img/casal/20.webp",
        "thumb": "/img/casal/20-p.webp",
        "width": 480,
        "height": 768,
        "nota": null,
        "section": null
      },
      {
        "cod": "21",
        "cheia": "/img/casal/21.webp",
        "thumb": "/img/casal/21-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "22",
        "cheia": "/img/casal/22.webp",
        "thumb": "/img/casal/22-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "23",
        "cheia": "/img/casal/23.webp",
        "thumb": "/img/casal/23-p.webp",
        "width": 480,
        "height": 643,
        "nota": null,
        "section": null
      },
      {
        "cod": "24",
        "cheia": "/img/casal/24.webp",
        "thumb": "/img/casal/24-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "25",
        "cheia": "/img/casal/25.webp",
        "thumb": "/img/casal/25-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "26",
        "cheia": "/img/casal/26.webp",
        "thumb": "/img/casal/26-p.webp",
        "width": 480,
        "height": 852,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "27",
        "cheia": "/img/casal/27.webp",
        "thumb": "/img/casal/27-p.webp",
        "width": 480,
        "height": 762,
        "nota": null,
        "section": null
      },
      {
        "cod": "28",
        "cheia": "/img/casal/28.webp",
        "thumb": "/img/casal/28-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "29",
        "cheia": "/img/casal/29.webp",
        "thumb": "/img/casal/29-p.webp",
        "width": 480,
        "height": 719,
        "nota": null,
        "section": null
      },
      {
        "cod": "30",
        "cheia": "/img/casal/30.webp",
        "thumb": "/img/casal/30-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "31",
        "cheia": "/img/casal/31.webp",
        "thumb": "/img/casal/31-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "32",
        "cheia": "/img/casal/32.webp",
        "thumb": "/img/casal/32-p.webp",
        "width": 480,
        "height": 1067,
        "nota": null,
        "section": null
      },
      {
        "cod": "33",
        "cheia": "/img/casal/33.webp",
        "thumb": "/img/casal/33-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "34",
        "cheia": "/img/casal/34.webp",
        "thumb": "/img/casal/34-p.webp",
        "width": 480,
        "height": 591,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "35",
        "cheia": "/img/casal/35.webp",
        "thumb": "/img/casal/35-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "36",
        "cheia": "/img/casal/36.webp",
        "thumb": "/img/casal/36-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "37",
        "cheia": "/img/casal/37.webp",
        "thumb": "/img/casal/37-p.webp",
        "width": 480,
        "height": 719,
        "nota": null,
        "section": null
      },
      {
        "cod": "38",
        "cheia": "/img/casal/38.webp",
        "thumb": "/img/casal/38-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "39",
        "cheia": "/img/casal/39.webp",
        "thumb": "/img/casal/39-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "40",
        "cheia": "/img/casal/40.webp",
        "thumb": "/img/casal/40-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "41",
        "cheia": "/img/casal/41.webp",
        "thumb": "/img/casal/41-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "42",
        "cheia": "/img/casal/42.webp",
        "thumb": "/img/casal/42-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "43",
        "cheia": "/img/casal/43.webp",
        "thumb": "/img/casal/43-p.webp",
        "width": 480,
        "height": 960,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "44",
        "cheia": "/img/casal/44.webp",
        "thumb": "/img/casal/44-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "45",
        "cheia": "/img/casal/45.webp",
        "thumb": "/img/casal/45-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "46",
        "cheia": "/img/casal/46.webp",
        "thumb": "/img/casal/46-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "47",
        "cheia": "/img/casal/47.webp",
        "thumb": "/img/casal/47-p.webp",
        "width": 480,
        "height": 852,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "48",
        "cheia": "/img/casal/48.webp",
        "thumb": "/img/casal/48-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "49",
        "cheia": "/img/casal/49.webp",
        "thumb": "/img/casal/49-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "50",
        "cheia": "/img/casal/50.webp",
        "thumb": "/img/casal/50-p.webp",
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
        "cheia": "/img/infantil/F01.webp",
        "thumb": "/img/infantil/F01-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F02",
        "cheia": "/img/infantil/F02.webp",
        "thumb": "/img/infantil/F02-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F03",
        "cheia": "/img/infantil/F03.webp",
        "thumb": "/img/infantil/F03-p.webp",
        "width": 480,
        "height": 784,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F04",
        "cheia": "/img/infantil/F04.webp",
        "thumb": "/img/infantil/F04-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F05",
        "cheia": "/img/infantil/F05.webp",
        "thumb": "/img/infantil/F05-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F06",
        "cheia": "/img/infantil/F06.webp",
        "thumb": "/img/infantil/F06-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F07",
        "cheia": "/img/infantil/F07.webp",
        "thumb": "/img/infantil/F07-p.webp",
        "width": 480,
        "height": 664,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F08",
        "cheia": "/img/infantil/F08.webp",
        "thumb": "/img/infantil/F08-p.webp",
        "width": 480,
        "height": 646,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F09",
        "cheia": "/img/infantil/F09.webp",
        "thumb": "/img/infantil/F09-p.webp",
        "width": 480,
        "height": 677,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F10",
        "cheia": "/img/infantil/F10.webp",
        "thumb": "/img/infantil/F10-p.webp",
        "width": 480,
        "height": 658,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F11",
        "cheia": "/img/infantil/F11.webp",
        "thumb": "/img/infantil/F11-p.webp",
        "width": 480,
        "height": 657,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F12",
        "cheia": "/img/infantil/F12.webp",
        "thumb": "/img/infantil/F12-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F13",
        "cheia": "/img/infantil/F13.webp",
        "thumb": "/img/infantil/F13-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F14",
        "cheia": "/img/infantil/F14.webp",
        "thumb": "/img/infantil/F14-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F15",
        "cheia": "/img/infantil/F15.webp",
        "thumb": "/img/infantil/F15-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F16",
        "cheia": "/img/infantil/F16.webp",
        "thumb": "/img/infantil/F16-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F17",
        "cheia": "/img/infantil/F17.webp",
        "thumb": "/img/infantil/F17-p.webp",
        "width": 480,
        "height": 657,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F18",
        "cheia": "/img/infantil/F18.webp",
        "thumb": "/img/infantil/F18-p.webp",
        "width": 438,
        "height": 673,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F19",
        "cheia": "/img/infantil/F19.webp",
        "thumb": "/img/infantil/F19-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F20",
        "cheia": "/img/infantil/F20.webp",
        "thumb": "/img/infantil/F20-p.webp",
        "width": 480,
        "height": 791,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F21",
        "cheia": "/img/infantil/F21.webp",
        "thumb": "/img/infantil/F21-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F22",
        "cheia": "/img/infantil/F22.webp",
        "thumb": "/img/infantil/F22-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F23",
        "cheia": "/img/infantil/F23.webp",
        "thumb": "/img/infantil/F23-p.webp",
        "width": 480,
        "height": 852,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F24",
        "cheia": "/img/infantil/F24.webp",
        "thumb": "/img/infantil/F24-p.webp",
        "width": 480,
        "height": 704,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "F25",
        "cheia": "/img/infantil/F25.webp",
        "thumb": "/img/infantil/F25-p.webp",
        "width": 480,
        "height": 840,
        "nota": null,
        "section": "meninas"
      },
      {
        "cod": "M01",
        "cheia": "/img/infantil/M01.webp",
        "thumb": "/img/infantil/M01-p.webp",
        "width": 438,
        "height": 657,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M02",
        "cheia": "/img/infantil/M02.webp",
        "thumb": "/img/infantil/M02-p.webp",
        "width": 480,
        "height": 852,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M03",
        "cheia": "/img/infantil/M03.webp",
        "thumb": "/img/infantil/M03-p.webp",
        "width": 480,
        "height": 616,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M04",
        "cheia": "/img/infantil/M04.webp",
        "thumb": "/img/infantil/M04-p.webp",
        "width": 480,
        "height": 853,
        "nota": "traje de herói exclusivo",
        "section": "meninos"
      },
      {
        "cod": "M05",
        "cheia": "/img/infantil/M05.webp",
        "thumb": "/img/infantil/M05-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M06",
        "cheia": "/img/infantil/M06.webp",
        "thumb": "/img/infantil/M06-p.webp",
        "width": 480,
        "height": 657,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M07",
        "cheia": "/img/infantil/M07.webp",
        "thumb": "/img/infantil/M07-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M08",
        "cheia": "/img/infantil/M08.webp",
        "thumb": "/img/infantil/M08-p.webp",
        "width": 480,
        "height": 840,
        "nota": "traje de herói exclusivo",
        "section": "meninos"
      },
      {
        "cod": "M09",
        "cheia": "/img/infantil/M09.webp",
        "thumb": "/img/infantil/M09-p.webp",
        "width": 480,
        "height": 640,
        "nota": "uniforme sem marca · número = idade",
        "section": "meninos"
      },
      {
        "cod": "M10",
        "cheia": "/img/infantil/M10.webp",
        "thumb": "/img/infantil/M10-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M11",
        "cheia": "/img/infantil/M11.webp",
        "thumb": "/img/infantil/M11-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M12",
        "cheia": "/img/infantil/M12.webp",
        "thumb": "/img/infantil/M12-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M13",
        "cheia": "/img/infantil/M13.webp",
        "thumb": "/img/infantil/M13-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M14",
        "cheia": "/img/infantil/M14.webp",
        "thumb": "/img/infantil/M14-p.webp",
        "width": 480,
        "height": 768,
        "nota": "uniforme sem marca · número = idade",
        "section": "meninos"
      },
      {
        "cod": "M15",
        "cheia": "/img/infantil/M15.webp",
        "thumb": "/img/infantil/M15-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M16",
        "cheia": "/img/infantil/M16.webp",
        "thumb": "/img/infantil/M16-p.webp",
        "width": 480,
        "height": 853,
        "nota": "com a mamãe · traje de herói exclusivo",
        "section": "meninos"
      },
      {
        "cod": "M17",
        "cheia": "/img/infantil/M17.webp",
        "thumb": "/img/infantil/M17-p.webp",
        "width": 480,
        "height": 724,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M18",
        "cheia": "/img/infantil/M18.webp",
        "thumb": "/img/infantil/M18-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M19",
        "cheia": "/img/infantil/M19.webp",
        "thumb": "/img/infantil/M19-p.webp",
        "width": 480,
        "height": 673,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M20",
        "cheia": "/img/infantil/M20.webp",
        "thumb": "/img/infantil/M20-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M21",
        "cheia": "/img/infantil/M21.webp",
        "thumb": "/img/infantil/M21-p.webp",
        "width": 480,
        "height": 852,
        "nota": "tema Dino Park",
        "section": "meninos"
      },
      {
        "cod": "M22",
        "cheia": "/img/infantil/M22.webp",
        "thumb": "/img/infantil/M22-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M23",
        "cheia": "/img/infantil/M23.webp",
        "thumb": "/img/infantil/M23-p.webp",
        "width": 480,
        "height": 642,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M24",
        "cheia": "/img/infantil/M24.webp",
        "thumb": "/img/infantil/M24-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": "meninos"
      },
      {
        "cod": "M25",
        "cheia": "/img/infantil/M25.webp",
        "thumb": "/img/infantil/M25-p.webp",
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
        "cheia": "/img/casual/01.webp",
        "thumb": "/img/casual/01-p.webp",
        "width": 480,
        "height": 554,
        "nota": null,
        "section": null
      },
      {
        "cod": "02",
        "cheia": "/img/casual/02.webp",
        "thumb": "/img/casual/02-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "03",
        "cheia": "/img/casual/03.webp",
        "thumb": "/img/casual/03-p.webp",
        "width": 480,
        "height": 679,
        "nota": null,
        "section": null
      },
      {
        "cod": "04",
        "cheia": "/img/casual/04.webp",
        "thumb": "/img/casual/04-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "05",
        "cheia": "/img/casual/05.webp",
        "thumb": "/img/casual/05-p.webp",
        "width": 480,
        "height": 787,
        "nota": null,
        "section": null
      },
      {
        "cod": "06",
        "cheia": "/img/casual/06.webp",
        "thumb": "/img/casual/06-p.webp",
        "width": 480,
        "height": 719,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "07",
        "cheia": "/img/casual/07.webp",
        "thumb": "/img/casual/07-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "08",
        "cheia": "/img/casual/08.webp",
        "thumb": "/img/casual/08-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "09",
        "cheia": "/img/casual/09.webp",
        "thumb": "/img/casual/09-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "10",
        "cheia": "/img/casual/10.webp",
        "thumb": "/img/casual/10-p.webp",
        "width": 480,
        "height": 1005,
        "nota": null,
        "section": null
      },
      {
        "cod": "11",
        "cheia": "/img/casual/11.webp",
        "thumb": "/img/casual/11-p.webp",
        "width": 480,
        "height": 643,
        "nota": null,
        "section": null
      },
      {
        "cod": "12",
        "cheia": "/img/casual/12.webp",
        "thumb": "/img/casual/12-p.webp",
        "width": 480,
        "height": 643,
        "nota": null,
        "section": null
      },
      {
        "cod": "13",
        "cheia": "/img/casual/13.webp",
        "thumb": "/img/casual/13-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "14",
        "cheia": "/img/casual/14.webp",
        "thumb": "/img/casual/14-p.webp",
        "width": 480,
        "height": 657,
        "nota": null,
        "section": null
      },
      {
        "cod": "15",
        "cheia": "/img/casual/15.webp",
        "thumb": "/img/casual/15-p.webp",
        "width": 480,
        "height": 861,
        "nota": null,
        "section": null
      },
      {
        "cod": "16",
        "cheia": "/img/casual/16.webp",
        "thumb": "/img/casual/16-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "17",
        "cheia": "/img/casual/17.webp",
        "thumb": "/img/casual/17-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "18",
        "cheia": "/img/casual/18.webp",
        "thumb": "/img/casual/18-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "19",
        "cheia": "/img/casual/19.webp",
        "thumb": "/img/casual/19-p.webp",
        "width": 480,
        "height": 856,
        "nota": null,
        "section": null
      },
      {
        "cod": "20",
        "cheia": "/img/casual/20.webp",
        "thumb": "/img/casual/20-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "21",
        "cheia": "/img/casual/21.webp",
        "thumb": "/img/casual/21-p.webp",
        "width": 480,
        "height": 844,
        "nota": null,
        "section": null
      },
      {
        "cod": "22",
        "cheia": "/img/casual/22.webp",
        "thumb": "/img/casual/22-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "23",
        "cheia": "/img/casual/23.webp",
        "thumb": "/img/casual/23-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "24",
        "cheia": "/img/casual/24.webp",
        "thumb": "/img/casual/24-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "25",
        "cheia": "/img/casual/25.webp",
        "thumb": "/img/casual/25-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "26",
        "cheia": "/img/casual/26.webp",
        "thumb": "/img/casual/26-p.webp",
        "width": 480,
        "height": 918,
        "nota": null,
        "section": null
      },
      {
        "cod": "27",
        "cheia": "/img/casual/27.webp",
        "thumb": "/img/casual/27-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "28",
        "cheia": "/img/casual/28.webp",
        "thumb": "/img/casual/28-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "29",
        "cheia": "/img/casual/29.webp",
        "thumb": "/img/casual/29-p.webp",
        "width": 480,
        "height": 850,
        "nota": null,
        "section": null
      },
      {
        "cod": "30",
        "cheia": "/img/casual/30.webp",
        "thumb": "/img/casual/30-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "31",
        "cheia": "/img/casual/31.webp",
        "thumb": "/img/casual/31-p.webp",
        "width": 480,
        "height": 856,
        "nota": null,
        "section": null
      },
      {
        "cod": "32",
        "cheia": "/img/casual/32.webp",
        "thumb": "/img/casual/32-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "33",
        "cheia": "/img/casual/33.webp",
        "thumb": "/img/casual/33-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "34",
        "cheia": "/img/casual/34.webp",
        "thumb": "/img/casual/34-p.webp",
        "width": 480,
        "height": 840,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "35",
        "cheia": "/img/casual/35.webp",
        "thumb": "/img/casual/35-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "36",
        "cheia": "/img/casual/36.webp",
        "thumb": "/img/casual/36-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "37",
        "cheia": "/img/casual/37.webp",
        "thumb": "/img/casual/37-p.webp",
        "width": 376,
        "height": 558,
        "nota": null,
        "section": null
      },
      {
        "cod": "38",
        "cheia": "/img/casual/38.webp",
        "thumb": "/img/casual/38-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "39",
        "cheia": "/img/casual/39.webp",
        "thumb": "/img/casual/39-p.webp",
        "width": 480,
        "height": 599,
        "nota": null,
        "section": null
      },
      {
        "cod": "40",
        "cheia": "/img/casual/40.webp",
        "thumb": "/img/casual/40-p.webp",
        "width": 480,
        "height": 544,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "41",
        "cheia": "/img/casual/41.webp",
        "thumb": "/img/casual/41-p.webp",
        "width": 480,
        "height": 852,
        "nota": null,
        "section": null
      },
      {
        "cod": "42",
        "cheia": "/img/casual/42.webp",
        "thumb": "/img/casual/42-p.webp",
        "width": 480,
        "height": 768,
        "nota": null,
        "section": null
      },
      {
        "cod": "43",
        "cheia": "/img/casual/43.webp",
        "thumb": "/img/casual/43-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "44",
        "cheia": "/img/casual/44.webp",
        "thumb": "/img/casual/44-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "45",
        "cheia": "/img/casual/45.webp",
        "thumb": "/img/casual/45-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "46",
        "cheia": "/img/casual/46.webp",
        "thumb": "/img/casual/46-p.webp",
        "width": 480,
        "height": 768,
        "nota": null,
        "section": null
      },
      {
        "cod": "47",
        "cheia": "/img/casual/47.webp",
        "thumb": "/img/casual/47-p.webp",
        "width": 480,
        "height": 658,
        "nota": null,
        "section": null
      },
      {
        "cod": "48",
        "cheia": "/img/casual/48.webp",
        "thumb": "/img/casual/48-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "49",
        "cheia": "/img/casual/49.webp",
        "thumb": "/img/casual/49-p.webp",
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
        "cheia": "/img/sensual/01.webp",
        "thumb": "/img/sensual/01-p.webp",
        "width": 480,
        "height": 599,
        "nota": null,
        "section": null
      },
      {
        "cod": "02",
        "cheia": "/img/sensual/02.webp",
        "thumb": "/img/sensual/02-p.webp",
        "width": 480,
        "height": 580,
        "nota": null,
        "section": null
      },
      {
        "cod": "03",
        "cheia": "/img/sensual/03.webp",
        "thumb": "/img/sensual/03-p.webp",
        "width": 480,
        "height": 600,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "04",
        "cheia": "/img/sensual/04.webp",
        "thumb": "/img/sensual/04-p.webp",
        "width": 480,
        "height": 854,
        "nota": null,
        "section": null
      },
      {
        "cod": "05",
        "cheia": "/img/sensual/05.webp",
        "thumb": "/img/sensual/05-p.webp",
        "width": 434,
        "height": 550,
        "nota": null,
        "section": null
      },
      {
        "cod": "06",
        "cheia": "/img/sensual/06.webp",
        "thumb": "/img/sensual/06-p.webp",
        "width": 480,
        "height": 598,
        "nota": null,
        "section": null
      },
      {
        "cod": "07",
        "cheia": "/img/sensual/07.webp",
        "thumb": "/img/sensual/07-p.webp",
        "width": 480,
        "height": 599,
        "nota": null,
        "section": null
      },
      {
        "cod": "08",
        "cheia": "/img/sensual/08.webp",
        "thumb": "/img/sensual/08-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "09",
        "cheia": "/img/sensual/09.webp",
        "thumb": "/img/sensual/09-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "10",
        "cheia": "/img/sensual/10.webp",
        "thumb": "/img/sensual/10-p.webp",
        "width": 480,
        "height": 600,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "11",
        "cheia": "/img/sensual/11.webp",
        "thumb": "/img/sensual/11-p.webp",
        "width": 480,
        "height": 636,
        "nota": "versão com bralette",
        "section": null
      },
      {
        "cod": "12",
        "cheia": "/img/sensual/12.webp",
        "thumb": "/img/sensual/12-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "13",
        "cheia": "/img/sensual/13.webp",
        "thumb": "/img/sensual/13-p.webp",
        "width": 480,
        "height": 585,
        "nota": "versão com bralette",
        "section": null
      },
      {
        "cod": "14",
        "cheia": "/img/sensual/14.webp",
        "thumb": "/img/sensual/14-p.webp",
        "width": 480,
        "height": 856,
        "nota": "versão com bralette",
        "section": null
      },
      {
        "cod": "15",
        "cheia": "/img/sensual/15.webp",
        "thumb": "/img/sensual/15-p.webp",
        "width": 480,
        "height": 654,
        "nota": null,
        "section": null
      },
      {
        "cod": "16",
        "cheia": "/img/sensual/16.webp",
        "thumb": "/img/sensual/16-p.webp",
        "width": 480,
        "height": 600,
        "nota": "versão com bralette",
        "section": null
      },
      {
        "cod": "17",
        "cheia": "/img/sensual/17.webp",
        "thumb": "/img/sensual/17-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "18",
        "cheia": "/img/sensual/18.webp",
        "thumb": "/img/sensual/18-p.webp",
        "width": 480,
        "height": 600,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "19",
        "cheia": "/img/sensual/19.webp",
        "thumb": "/img/sensual/19-p.webp",
        "width": 480,
        "height": 590,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "20",
        "cheia": "/img/sensual/20.webp",
        "thumb": "/img/sensual/20-p.webp",
        "width": 480,
        "height": 678,
        "nota": "preto & branco · versão com bandeau",
        "section": null
      },
      {
        "cod": "21",
        "cheia": "/img/sensual/21.webp",
        "thumb": "/img/sensual/21-p.webp",
        "width": 480,
        "height": 721,
        "nota": null,
        "section": null
      },
      {
        "cod": "22",
        "cheia": "/img/sensual/22.webp",
        "thumb": "/img/sensual/22-p.webp",
        "width": 480,
        "height": 563,
        "nota": null,
        "section": null
      },
      {
        "cod": "23",
        "cheia": "/img/sensual/23.webp",
        "thumb": "/img/sensual/23-p.webp",
        "width": 480,
        "height": 574,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "24",
        "cheia": "/img/sensual/24.webp",
        "thumb": "/img/sensual/24-p.webp",
        "width": 347,
        "height": 519,
        "nota": null,
        "section": null
      },
      {
        "cod": "25",
        "cheia": "/img/sensual/25.webp",
        "thumb": "/img/sensual/25-p.webp",
        "width": 480,
        "height": 693,
        "nota": null,
        "section": null
      },
      {
        "cod": "26",
        "cheia": "/img/sensual/26.webp",
        "thumb": "/img/sensual/26-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "27",
        "cheia": "/img/sensual/27.webp",
        "thumb": "/img/sensual/27-p.webp",
        "width": 480,
        "height": 720,
        "nota": "versão com body de renda",
        "section": null
      },
      {
        "cod": "28",
        "cheia": "/img/sensual/28.webp",
        "thumb": "/img/sensual/28-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco · versão com calcinha",
        "section": null
      },
      {
        "cod": "29",
        "cheia": "/img/sensual/29.webp",
        "thumb": "/img/sensual/29-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "30",
        "cheia": "/img/sensual/30.webp",
        "thumb": "/img/sensual/30-p.webp",
        "width": 480,
        "height": 640,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "31",
        "cheia": "/img/sensual/31.webp",
        "thumb": "/img/sensual/31-p.webp",
        "width": 480,
        "height": 853,
        "nota": "versão com forro",
        "section": null
      },
      {
        "cod": "32",
        "cheia": "/img/sensual/32.webp",
        "thumb": "/img/sensual/32-p.webp",
        "width": 480,
        "height": 853,
        "nota": null,
        "section": null
      },
      {
        "cod": "33",
        "cheia": "/img/sensual/33.webp",
        "thumb": "/img/sensual/33-p.webp",
        "width": 480,
        "height": 720,
        "nota": "versão com forro",
        "section": null
      },
      {
        "cod": "34",
        "cheia": "/img/sensual/34.webp",
        "thumb": "/img/sensual/34-p.webp",
        "width": 480,
        "height": 617,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "35",
        "cheia": "/img/sensual/35.webp",
        "thumb": "/img/sensual/35-p.webp",
        "width": 480,
        "height": 720,
        "nota": null,
        "section": null
      },
      {
        "cod": "36",
        "cheia": "/img/sensual/36.webp",
        "thumb": "/img/sensual/36-p.webp",
        "width": 480,
        "height": 720,
        "nota": "versão com body",
        "section": null
      },
      {
        "cod": "37",
        "cheia": "/img/sensual/37.webp",
        "thumb": "/img/sensual/37-p.webp",
        "width": 480,
        "height": 639,
        "nota": null,
        "section": null
      },
      {
        "cod": "38",
        "cheia": "/img/sensual/38.webp",
        "thumb": "/img/sensual/38-p.webp",
        "width": 480,
        "height": 658,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "39",
        "cheia": "/img/sensual/39.webp",
        "thumb": "/img/sensual/39-p.webp",
        "width": 480,
        "height": 594,
        "nota": null,
        "section": null
      },
      {
        "cod": "40",
        "cheia": "/img/sensual/40.webp",
        "thumb": "/img/sensual/40-p.webp",
        "width": 480,
        "height": 600,
        "nota": null,
        "section": null
      },
      {
        "cod": "41",
        "cheia": "/img/sensual/41.webp",
        "thumb": "/img/sensual/41-p.webp",
        "width": 480,
        "height": 640,
        "nota": null,
        "section": null
      },
      {
        "cod": "42",
        "cheia": "/img/sensual/42.webp",
        "thumb": "/img/sensual/42-p.webp",
        "width": 480,
        "height": 704,
        "nota": "preto & branco",
        "section": null
      },
      {
        "cod": "43",
        "cheia": "/img/sensual/43.webp",
        "thumb": "/img/sensual/43-p.webp",
        "width": 480,
        "height": 723,
        "nota": null,
        "section": null
      },
      {
        "cod": "44",
        "cheia": "/img/sensual/44.webp",
        "thumb": "/img/sensual/44-p.webp",
        "width": 480,
        "height": 562,
        "nota": "versão com body por baixo",
        "section": null
      },
      {
        "cod": "45",
        "cheia": "/img/sensual/45.webp",
        "thumb": "/img/sensual/45-p.webp",
        "width": 480,
        "height": 872,
        "nota": "versão com bralette",
        "section": null
      },
      {
        "cod": "46",
        "cheia": "/img/sensual/46.webp",
        "thumb": "/img/sensual/46-p.webp",
        "width": 480,
        "height": 852,
        "nota": null,
        "section": null
      },
      {
        "cod": "47",
        "cheia": "/img/sensual/47.webp",
        "thumb": "/img/sensual/47-p.webp",
        "width": 480,
        "height": 663,
        "nota": null,
        "section": null
      },
      {
        "cod": "48",
        "cheia": "/img/sensual/48.webp",
        "thumb": "/img/sensual/48-p.webp",
        "width": 480,
        "height": 721,
        "nota": null,
        "section": null
      },
      {
        "cod": "49",
        "cheia": "/img/sensual/49.webp",
        "thumb": "/img/sensual/49-p.webp",
        "width": 480,
        "height": 720,
        "nota": "preto & branco",
        "section": null
      }
    ]
  }
};

const { productsModel } = require("../model/products");

const data = [
  {
    id: 1,
    category: "electronics",
    subCategory: "electronics",
    productImage1:
      "https://m.media-amazon.com/images/I/71y-nJm3NiL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/91KMe39T03L._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/81Fvt12g-IL._SL1500_.jpg",
    productTitle:
      "HP 15s, 11th Gen Intel Core i5-1155G7, 15.6 inch(39.6cm) FHD Anti-Glare Laptop(8GB RAM/512 GB SSD/Intel Iris Xe Graphics/Win 11/Dual Speakers/Backlit KeyboardAlexa Built-in/MSO 2021) 15s-fr4000TU",
    productPrice: 52490,
    rating: 4.3,
  },
  {
    id: 2,
    category: "electronics",
    subCategory: "electronics",
    productImage1:
      "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71-6roO29AL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71z-1j187cL._SL1500_.jpg",
    productTitle:
      "Apple 2020 MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey",
    productPrice: 79990,
    rating: 4.1,
  },
  {
    id: 3,
    category: "electronics",
    subCategory: "electronics",
    productImage1:
      "https://m.media-amazon.com/images/I/51cVJdMGznL._SL1000_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61NJJEoyHNL._SL1000_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/51wQs0x5SzL._SL1000_.jpg",
    productTitle:
      "Lenovo IdeaPad Slim 3 Intel Core i3-1115G4 11th Gen 15.6(39.62cm) FHD Laptop(8GB/ 256GB SSD / Win 11 / Office 2021 / 2 Year Warranty / 3 Month Game Pass / Arctic Grey / 1.65Kg), 82H803GTIN",
    productPrice: 34990,
    rating: 3.7,
  },
  {
    id: 4,
    category: "electronics",
    subCategory: "electronics",
    productImage1:
      "https://m.media-amazon.com/images/I/61S9aVnRZDL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/81DEzbJ9ERL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71-SQ0I-HxL._SL1500_.jpg",
    productTitle:
      "Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution(Black) ",
    productPrice: 1499,
    rating: 4.3,
  },
  {
    id: 5,
    category: "electronics",
    subCategory: "electronics",
    productImage1:
      "https://m.media-amazon.com/images/I/61SSVxTSs3L._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61nAoz3GpRL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/619g-acf-GL._SL1500_.jpg",
    productTitle:
      "Noise Pulse 2 Max 1.85 Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness, Smart DND, 100 Sports Modes, Smartwatch for Men and Women(Jet Black) ",
    productPrice: 1799,
    rating: 4.4,
  },
  {
    id: 6,
    category: "electronics",
    subCategory: "electronics",
    productImage1:
      "https://m.media-amazon.com/images/I/61H5PEqBBAL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61PbDF5yhZL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71dC5JjtvDL._SL1500_.jpg",
    productTitle:
      "boAt Wave Call Smart Watch, Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69 HD Display with 550 NITS & 70% Color Gamut, 150+ Watch Faces, Multi-Sport Modes,HR,SpO2, IP68(Active Black)",
    productPrice: 1299,
    rating: 3.6,
  },
  {
    id: 7,
    category: "electronics",
    subCategory: "electronics",
    productImage1:
      "https://m.media-amazon.com/images/I/81Tib6mb8eL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/81Tm8cPEMFL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71SVJdxBRuL._SL1500_.jpg",
    productTitle:
      "Canon Digital Camera EOS R100 RF-S18-45mm is STM Kit (Black)",
    productPrice: 64990,
    rating: 4.8,
  },
  {
    id: 8,
    category: "electronics",
    subCategory: "electronics",
    productImage1: "https://m.media-amazon.com/images/I/41l-kLb5biL.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61P2k-E4h2L._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/618mTDY3SlL._SL1500_.jpg",
    productTitle:
      "insta360 GO 3 (64GB) - Small & Lightweight Action Camera, Portable and Versatile, Hands-Free POV, Mount Anywhere, Stabilization, Multifunctional Action Pod, Waterproof, for Travel, Sports, Vlog",
    productPrice: 38990,
    rating: 4.9,
  },
  {
    id: 9,
    category: "electronics",
    subCategory: "electronics",
    productImage1:
      "https://m.media-amazon.com/images/I/617sGSjmC1L._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71z6zA281ML._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71eFxMu7N9L._SL1500_.jpg",
    productTitle:
      "GoPro HERO11 Waterproof Action Camera with Front + Rear LCD Screens, 5.3K60 Ultra HD Video, HyperSmooth Resolution,1080p Live Streaming with Enduro Battery (1 Year INTL Warranty + 1 Year in Warranty)",
    productPrice: 43888,
    rating: 4.2,
  },
  {
    id: 10,
    category: "electronics",
    subCategory: "electronics",
    productImage1:
      "https://m.media-amazon.com/images/I/619PwwYcuVL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/711wTHpXWJL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71QeROl5ExL._SL1500_.jpg",
    productTitle:
      "Sony HT-A7000 A Series Premium Soundbar 7.1.2ch 8k/4k 360 SSM Home Theatre System with Dolby Atmos (Hi Res & 360 Reality Audio,Bluetooth, Built in WiFi, HDMI eArc & Optical Connectivity)",
    productPrice: 124551,
    rating: 3.5,
  },
  {
    id: 11,
    category: "electronics",
    subCategory: "electronics",
    productImage1:
      "https://m.media-amazon.com/images/I/71+s6K1eovL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71IYRJtvBrL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/81NqnjFHg-L._SL1500_.jpg",
    productTitle:
      "Sony HT-S20R Real 5.1ch Dolby Digital Soundbar for TV with subwoofer and Compact Rear Speakers, 5.1ch Home Theatre System (400W,Bluetooth & USB Connectivity, HDMI & Optical connectivity)",
    productPrice: 17990,
    rating: 3.7,
  },
  {
    id: 12,
    category: "electronics",
    subCategory: "electronics",
    productImage1:
      "https://m.media-amazon.com/images/I/61zYC5DuimL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/81BeQk-mtGL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/81qZMA6QLwL._SL1500_.jpg",
    productTitle: "Marshall Willen Portable Bluetooth Speaker - Black & Brass",
    productPrice: 9999,
    rating: 4.5,
  },
  {
    id: 13,
    category: "electronics",
    subCategory: "electronics",
    productImage1:
      "https://m.media-amazon.com/images/I/81xHjVQPwAL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/81ejM-ndGvL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71ERxdjesAL._SL1500_.jpg",
    productTitle:
      "Acer EK220Q 21.5 Inch (54.61 cm) Full HD (1920x1080) VA Panel LCD Monitor with LED Back Light I 1 MS VRB, 100Hz Refresh I 250 Nits I HDMI & VGA Ports with HDMI Cable I Eye Care Features (Black)",
    productPrice: 6065,
    rating: 4.7,
  },
  {
    id: 14,
    category: "electronics",
    subCategory: "electronics",
    productImage1:
      "https://m.media-amazon.com/images/I/61y3SVAD+eL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61yK17Rpf4L._SL1334_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/61jYbSfMNUL._SL1500_.jpg",
    productTitle:
      "LG Ultrawide 29Wl500, 29 Inch (73 Cm) 21:9 Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Srgb 99%, Slim Bezel, Multitasking Monitor, Hdmi X 2 (Black)",
    productPrice: 1599,
    rating: 4.8,
  },
  {
    id: 15,
    category: "electronics",
    subCategory: "electronics",
    productImage1:
      "https://m.media-amazon.com/images/I/81HK954c4LL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/610Z0dk2N6S._SL1000_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/51eKdJgi2pL._SL1040_.jpg",
    productTitle:
      "Acer Nitro Vg270 S 27 Inch (68.58 Cm) LCD 1920 x 1080 Pixels Monitor with LED Backlight Full Hd IPS Gaming I 0.5 Ms Response Time I 165Hz Refresh Rate I HDR 10 I AMD Radeon Free Sync I (Black)",
    productPrice: 13949,
    rating: 5,
  },

  {
    id: 16,
    category: "electronics",
    subCategory: "cellphonesandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61fUC+17f8L._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71dKjvLPkAL._SL1500_.jpg",
    productTitle: "Apple iPhone 14 Pro Max (128 GB) - Deep Purple",
    productPrice: 127999,
    rating: 3.9,
  },
  {
    id: 17,
    category: "electronics",
    subCategory: "cellphonesandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/71qjUzUt+ML._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71kvEYMIYFL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/61TvnnwtqZL._SL1500_.jpg",
    productTitle: "OnePlus 11R 5G(Sonic Black, 8GB RAM, 128GB Storage) ",
    productPrice: 39999,
    rating: 4.3,
  },
  {
    id: 18,
    category: "electronics",
    subCategory: "cellphonesandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/61JS7lF2aqL._SL1200_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61M+le6z7mL._SL1200_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/51juCg+0qHL._SL1200_.jpg",
    productTitle:
      "iQOO Neo 7 5G (Frost Blue, 8GB RAM, 128GB Storage) | Dimensity 8200, only 4nm Processor in The Segment | 50% Charge in 10 mins | Motion Control & 90 FPS Gaming",
    productPrice: 28999,
    rating: 4.7,
  },
  {
    id: 19,
    category: "electronics",
    subCategory: "cellphonesandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/817WWpaFo1L._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71wAfsKIYBL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/61IUmkxaWgL._SL1500_.jpg",
    productTitle:
      "Samsung Galaxy M14 5G(ICY Silver, 4GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa - Core Processor | Android 13 | Without Charger",
    productPrice: 13990,
    rating: 4.3,
  },
  {
    id: 20,
    category: "electronics",
    subCategory: "cellphonesandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/81y5GkulK5L._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71H6mqexb8L._SL1500_.jpg",
    productTitle:
      "realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera",
    productPrice: 10999,
    rating: 4.1,
  },
  {
    id: 21,
    category: "electronics",
    subCategory: "cellphonesandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/810-BAwpF9L._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/81TICIfkcQL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/61ivay0AsyL._SL1500_.jpg",
    productTitle:
      "Redmi A2 (Classic Black, 2GB RAM, 32GB Storage) | Powerful Octa Core G36 Processor | Upto 7GB RAM | Large 16.5 cm HD+ Display with Massive 5000mAh Battery | 2 Years Warranty [Limited time Offer]",
    productPrice: 5899,
    rating: 4.5,
  },
  {
    id: 22,
    category: "electronics",
    subCategory: "cellphonesandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/71lVwl3q-kL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/81WS1l9stUL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/81YM16Ezr7L._SL1500_.jpg",
    productTitle:
      "MI Power Bank 3i 20000mAh Lithium Polymer 18W Fast Power Delivery Charging | Input- Type C | Micro USB| Triple Output | Sandstone Black",
    productPrice: 2149,
    rating: 4.3,
  },
  {
    id: 23,
    category: "electronics",
    subCategory: "cellphonesandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/61zfnaeduEL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71gjJ2laD7L._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71iXowujOeL._SL1500_.jpg",
    productTitle:
      "Ambrane 20000mAh Power Bank, 20W Fast Charging, Triple Output, Type C PD (Input & Output), Quick Charge, Li-Polymer, Multi-Layer Protection for iPhone, Smartphones & Other Devices (Stylo 20K, Green)",
    productPrice: 1999,
    rating: 4.6,
  },
  {
    id: 24,
    category: "electronics",
    subCategory: "cellphonesandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/61cm+YP1KYL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71ACEZbGseL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71OyB37QS0L._SL1500_.jpg",
    productTitle:
      "Ambrane 10000mAh Magnetic Wireless Power Bank for iPhone 12 & Above, 22.5W Wired + 15W Wireless Charging, Mobile Stand, Type C PD (Input & Output), Li-Polymer (Aerosync PB 10, Black)",
    productPrice: 1999,
    rating: 3.3,
  },
  {
    id: 25,
    category: "electronics",
    subCategory: "cellphonesandaccessories",
    productImage1: "https://m.media-amazon.com/images/I/21x1gw1geuL.jpg",
    productImage2: "https://m.media-amazon.com/images/I/21-jw0c6MFL.jpg",
    productImage3: "https://m.media-amazon.com/images/I/31ywSIjOjgL.jpg",
    productTitle: "https://m.media-amazon.com/images/I/31ywSIjOjgL.jpg",
    productPrice: 1999,
    rating: 4.6,
  },
  {
    id: 26,
    category: "electronics",
    subCategory: "cellphonesandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/71eVAHH3tsL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61Lozh3OdTL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71J4x0iThjL._SL1500_.jpg",
    productTitle:
      "boAt Type C A325/A320 Tangle-free, Sturdy Type C Cable with 3A Rapid Charging & 480mbps Data Transmission(Black)",
    productPrice: 99,
    rating: 4.1,
  },
  {
    id: 27,
    category: "electronics",
    subCategory: "cellphonesandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/61vb6LHsqpL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71vAMmXUiSL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71uyEXGP78L._SL1500_.jpg",
    productTitle:
      "boAt Dual Port Rapid Car Charger (Qualcomm Certified) with Quick Charge 3.0 + Free Micro USB Cable - (Black)",
    productPrice: 499,
    rating: 3.9,
  },
  {
    id: 28,
    category: "electronics",
    subCategory: "cellphonesandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/51hjoVOYonL._SL1497_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/51we65pnx8L._SL1464_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/51Vr4aOiLFL._SL1423_.jpg",
    productTitle:
      "ExpressB® Back Cover for iPhone 14 | Minimal Protect | Ultra Thin Anti Scratch Matte Finish Case for iPhone 14 (White)",
    productPrice: 289,
    rating: 3.4,
  },
  {
    id: 29,
    category: "electronics",
    subCategory: "cellphonesandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/619wmM5sHaL._SL1200_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61OSe7JCvyL._SL1200_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/61wUsXDEH6L._SL1200_.jpg",
    productTitle:
      "Spigen Optik Armor Back Cover Case for Samsung Galaxy S23 (Poly Carbonate + TPU | Black)",
    productPrice: 2399,
    rating: 3.9,
  },
  {
    id: 30,
    category: "electronics",
    subCategory: "cellphonesandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/61H1dMNTSnL._SL1413_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/6198qlgHWeL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71nuAzQ08kL._SL1500_.jpg",
    productTitle:
      "Syvo WT 3130 Aluminum Tripod (133CM), Universal Lightweight Tripod with Mobile Phone Holder Mount & Carry Bag for All Smart Phones, Gopro, Cameras",
    productPrice: 799,
    rating: 2.5,
  },

  {
    id: 31,
    category: "electronics",
    subCategory: "computersandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/71lMEeDJhuL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71qaVIPLuNL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/81FilDMqLhL._SL1500_.jpg",
    productTitle:
      "Honor MagicBook X14 (2023), 12th Gen Intel Core i5-12450H (16GB/512GB NVMe SSD, 14-inch (35.56 cm) FHD IPS Anti-Glare Thin and Light Laptop/Windows 11/Backlit Keyboard/Fingerprint Login/1.43Kg), Gray",
    productPrice: 49990,
    rating: 4.3,
  },
  {
    id: 32,
    category: "electronics",
    subCategory: "computersandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/61eTPcEsC+L._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/81HH34WFHZL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/813PAIbmkpL._SL1500_.jpg",
    productTitle:
      "ASUS Vivobook Pro 15, AMD Ryzen 5 5600H, 15.6(39.62 cm) FHD, Thin & Light Laptop(16GB / 512GB SSD / 4GB NVIDIA GeForce RTX 3050 / Windows 11 / Office 2021 / Backlit / Fingerprint / Blue / 1.80 kg), M6500QC - HN541WS",
    productPrice: 63990,
    rating: 4.3,
  },
  {
    id: 33,
    category: "electronics",
    subCategory: "computersandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/71xpFidwZIL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/812P6e7EpoL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/91oqT2kZk2L._SL1500_.jpg",
    productTitle:
      "HP 15s, 11th Gen Intel Core i3 8GB RAM/1TB HDD+256 GB SSD 15.6-inches/39.6 cm FHD Laptop/Windows 11/Intel UHD Graphics/Dual Speakers/Alexa/MSO/Fast Charge/1.75 Kg, 15s-du3614TU",
    productPrice: 40990,
    rating: 3.6,
  },
  {
    id: 34,
    category: "electronics",
    subCategory: "computersandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/71iiXU7HHkL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61atYCE26YL._SL1100_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71G4myYJuAL._SL1500_.jpg",
    productTitle:
      "Xiaomi NotebookPro QHD+ IPS AntiGlare Display Intel Core i5-11300H 11th Gen 14 inch(35.56 cm) Thin & Light Laptop(8GB/512GB SSD/Iris Xe Graphics/Windows 11/MS Office 21/Backlight KB/FP Sensor/1.4 Kg)",
    productPrice: 61999,
    rating: 4.6,
  },
  {
    id: 35,
    category: "electronics",
    subCategory: "computersandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/91JLywJySeL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71j7bMU1AbL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71RmM9Ar9bL._SL1500_.jpg",
    productTitle:
      "ASUS TUF Gaming F15, Intel Core i5-11400H 11th Gen, 15.6-inch (39.62 cm) FHD 144Hz, Gaming Laptop (16GB/512GB SSD/4GB NVIDIA GeForce RTX 2050/Win 11/ RGB Backlit KB/Black/2.30 kg), FX506HF-HN025W",
    productPrice: 66990,
    rating: 4.8,
  },
  {
    id: 36,
    category: "electronics",
    subCategory: "computersandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/61G5EPaVmXL._SL1080_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71mbpZHHUGL._SL1200_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71-PdmrSeRL._SL1200_.jpg",
    productTitle:
      "Dell Vostro 3420 Laptop,Intel i3-1115G4/8GB/512GB/14.0(35.56cm) FHD Display, TÜV Rheinland Certified Comfortview Reduce Harmful Blue Light Emissions/ Win 11 + MSO'21/15 Month McAfee/Carbon Black/1.48kg",
    productPrice: 37990,
    rating: 4.1,
  },
  {
    id: 37,
    category: "electronics",
    subCategory: "computersandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/61NGnpjoRDL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61JamrBdMSL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/81+h4mcrL0L._SL1500_.jpg",
    productTitle:
      "Apple 2021 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Space Grey (9th Generation)",
    productPrice: 33900,
    rating: 5,
  },
  {
    id: 38,
    category: "electronics",
    subCategory: "computersandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/81Vs371KLML._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/51hzfHGxnZL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/81+Ivpw21aL._SL1500_.jpg",
    productTitle:
      "Samsung Galaxy Tab S8 27.94 cm (11 inch) Display, RAM 8 GB, ROM 128 GB Expandable, S Pen in-Box, Wi-Fi Tablet, Graphite",
    productPrice: 54999,
    rating: 4.5,
  },
  {
    id: 39,
    category: "electronics",
    subCategory: "computersandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/61QnhDo0FEL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61NRctJxx2L._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71JPJ84QzjL._SL1350_.jpg",
    productTitle:
      "OnePlus Pad 29.49cm (11.61 inch) LCD Display, 12GB RAM,256GB Storage, MediaTek Dimensity 9000, Android 13.1, 144HZ Refresh Rate, Dolby Vision Atmos, Wi-Fi with Cellular Data Sharing Tablet",
    productPrice: 37999,
    rating: 4.9,
  },
  {
    id: 40,
    category: "electronics",
    subCategory: "computersandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/61lD2tTTi9L._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/718DSbIckjL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71CSJq-SBcL._SL1500_.jpg",
    productTitle:
      "Logitech MX Master 2S Wireless Mouse, Multi-Device, Bluetooth or 2.4GHz Wireless with USB Unifying Receiver, 4000 DPI Any Surface Tracking, 7 Buttons, Fast Rechargeable, Laptop/PC/Mac/iPad OS - Black",
    productPrice: 6495,
    rating: 4.4,
  },
  {
    id: 41,
    category: "electronics",
    subCategory: "computersandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/61fl+k9O-FL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61owcFyiRML._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/612Vyu5Sz7L._SL1500_.jpg",
    productTitle:
      "Logitech K480 Wireless Multi-Device Keyboard For Windows, Macos, Ipados, Android Or Chrome Os, Bluetooth, Compact, Compatible With Pc, Mac, Laptop, Smartphone, Tablet - Black",
    productPrice: 2495,
    rating: 3.7,
  },
  {
    id: 42,
    category: "electronics",
    subCategory: "computersandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/61Lvv5-UfCL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/91vnGLIcfeL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/9139-16PrKL._SL1500_.jpg",
    productTitle:
      "HP w300 1080P 30 FPS FHD Webcam with Built-in Dual Digital Mic, Plug and Play Setup, Wide-Angle View for Video Calling on Skype, Zoom, Microsoft Teams and Other Apps/ 1 Year Warranty (1W4W5AA),Black",
    productPrice: 1699,
    rating: 3.9,
  },
  {
    id: 43,
    category: "electronics",
    subCategory: "computersandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/61IYYoZ66VL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71i6evy+8tL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71FsEvvAYXL._SL1500_.jpg",
    productTitle:
      "Logitech G29 Driving Force Racing Wheel and Floor Pedals, Real Force, Stainless Steel Paddle Shifters, Leather Steering Wheel Cover, Adjustable Floor Pedals, PS5/PS4/PS3/PC/Mac – Black",
    productPrice: 32995,
    rating: 5,
  },
  {
    id: 44,
    category: "electronics",
    subCategory: "computersandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/712ZYP8ubUL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71qOWNxv4jL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/91hlzO8WNBL._SL1500_.jpg",
    productTitle:
      "SanDisk Ultra Dual Drive Go usb3.0 Type C Pendrive for Mobile (Black, 64 GB, 5Y - SDDDC3-064G-I35) & Ultra microSD UHS-I Card 32GB, 120MB/s R",
    productPrice: 1018,
    rating: 4.7,
  },
  {
    id: 45,
    category: "electronics",
    subCategory: "computersandaccessories",
    productImage1:
      "https://m.media-amazon.com/images/I/71iIr9koTGL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/91I0IoiIa2L._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/91xdnvNKxHL._SL1500_.jpg",
    productTitle:
      "Seagate Portable 4TB External HDD USB 3.0 for PC Laptop and Mac (STGX4000400)",
    productPrice: 8399,
    rating: 4.3,
  },

  {
    id: 46,
    category: "electronics",
    subCategory: "headphones",
    productImage1:
      "https://m.media-amazon.com/images/I/61KNJav3S9L._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61YwKdHkElL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/81bzjobShrL._SL1500_.jpg",
    productTitle:
      "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Headphones with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",
    productPrice: 1099,
    rating: 3.9,
  },
  {
    id: 47,
    category: "electronics",
    subCategory: "headphones",
    productImage1:
      "https://m.media-amazon.com/images/I/51creylSFEL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/7180In-L+4L._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71ZfijOwOtL._SL1500_.jpg",
    productTitle:
      "JBL Tune 230NC TWS, Active Noise Cancellation Earbuds with Mic, Massive 40 Hrs Playtime with Speed Charge, Adjustable EQ APP, 4Mics for Perfect Calls, Google Fast Pair, Bluetooth 5.2 (Black)",
    productPrice: 5399,
    rating: 3.9,
  },
  {
    id: 48,
    category: "electronics",
    subCategory: "headphones",
    productImage1:
      "https://m.media-amazon.com/images/I/51G45qLluWL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/51pxc-JdqnL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/61y5lJH5tCL._SL1500_.jpg",
    productTitle:
      "Bose New QuietComfort Earbuds II, Wireless, Bluetooth, World’s Best Noise Cancelling in-Ear Headphones with Personalized Noise Cancellation & Sound, Triple Black",
    productPrice: 22999,
    rating: 5,
  },
  {
    id: 49,
    category: "electronics",
    subCategory: "headphones",
    productImage1:
      "https://m.media-amazon.com/images/I/61DHTu6aisL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71QFhvdV1LL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/61Qu4H-XEfL._SL1500_.jpg",
    productTitle:
      "boAt Rockerz 245 pro Bluetooth Neckband in Ear with Mic, Beast Mode(Super Low Latency) for Gaming, ENx Tech for Clear Calls, ASAP Charge, 20HRS Playtime,IPX4, Dual Pairing & BT v5.3(Fiery Black)",
    productPrice: 999,
    rating: 4.6,
  },
  {
    id: 50,
    category: "electronics",
    subCategory: "headphones",
    productImage1:
      "https://m.media-amazon.com/images/I/71aRQYxGFXL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71wcSiqKMmL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71AA34b7a-L._SL1500_.jpg",
    productTitle:
      "Boult Audio ZCharge Wireless in Ear Bluetooth Neckband with ENC Mic, 40H Playtime, Type-C Fast Charging (10Mins=15Hrs Playtime), Dual Pairing, Made in India, Biggest 14.2mm Drivers Ear Phones (Blue)",
    productPrice: 1099,
    rating: 4,
  },
  {
    id: 51,
    category: "electronics",
    subCategory: "headphones",
    productImage1:
      "https://m.media-amazon.com/images/I/61WeCZ-WvrL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61pJiKddECL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/510hgn9N6mL._SL1500_.jpg",
    productTitle:
      "boAt Rockerz 255 Max in Ear Earphones with 60H Playtime, EQ Modes, Power Magnetic Earbuds, Beast™ Mode, ENx™ Tech, ASAP™ Charge(10 Mins=10 Hrs),Textured Finish,Dual Pair(Stunning Black)",
    productPrice: 1399,
    rating: 4,
  },
  {
    id: 52,
    category: "electronics",
    subCategory: "headphones",
    productImage1:
      "https://m.media-amazon.com/images/I/61vJtKbAssL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/81V1VCLb4oL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/81gW2Vb93RL._SL1500_.jpg",
    productTitle:
      "Sony WH-1000XM5 Wireless Industry Leading Active Noise Cancelling Headphones, 8 Mics for Clear Calling, 30Hr Battery, 3 Min Quick Charge = 3 Hours Playback, Multi Point Connectivity, Alexa - Black",
    productPrice: 29990,
    rating: 4.3,
  },
  {
    id: 53,
    category: "electronics",
    subCategory: "headphones",
    productImage1:
      "https://m.media-amazon.com/images/I/61CmvOvm-wL._SL1200_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/6104zu8sCgL._SL1200_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/51G3Gu34bQL._SL1200_.jpg",
    productTitle:
      "GOVO GOBOLD 600 Bluetooth Wireless On Ear Headphones with Mic, 15H Play Time, 40MM Driver, Bluetooth 5.2, Passive Noise Cancellation",
    productPrice: 7899,
    rating: 4.8,
  },
  {
    id: 54,
    category: "electronics",
    subCategory: "headphones",
    productImage1:
      "https://m.media-amazon.com/images/I/71ISIssoVFL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/81nMx6cWJJL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71sI3x7ZkyL._SL1500_.jpg",
    productTitle:
      "boAt Nirvana 751 ANC Hybrid Active Noise Cancelling Bluetooth Wireless Over Ear Headphones with Up to 65H Playtime, ASAP Charge, Ambient Sound Mode, Immersive Sound, Carry Pouch(Gunmetal Grey)",
    productPrice: 4499,
    rating: 4.2,
  },
  {
    id: 55,
    category: "electronics",
    subCategory: "headphones",
    productImage1:
      "https://m.media-amazon.com/images/I/71zPb+U1ybL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71C5JaxdWpL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71FPMdrsj9L._SL1500_.jpg",
    productTitle:
      "Sennheiser HD 458 ANC Foldable Bluetooth Wireless Over Ear Headphones with Mic, Alexa Built-in - Active Noise Cancellation, 30-Hour Battery Life, USB-C Fast Charging (Black)",
    productPrice: 8946,
    rating: 4.5,
  },
  {
    id: 56,
    category: "electronics",
    subCategory: "headphones",
    productImage1:
      "https://m.media-amazon.com/images/I/519k4QoAdCL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/719n3k7t3kL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71YZPkhxc0L._SL1500_.jpg",
    productTitle:
      "boAt Rockerz 255 Touch Neckband with Full Touch Controls, Spatial Audio, Up to 30H Playtime, ASAP™ Charge, Beast™ Mode, ENx™ Technology(Pitch Black)",
    productPrice: 1499,
    rating: 4.1,
  },
  {
    id: 57,
    category: "electronics",
    subCategory: "headphones",
    productImage1:
      "https://m.media-amazon.com/images/I/51bxV2QoyML._SL1200_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/51t-l9bHjjL._SL1200_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/61fd7keGtCL._SL1200_.jpg",
    productTitle:
      "GOVO GoBuds 945 ChromeX Wireless Earbuds: Bluetooth v5.3, with 52H Playtime, Quad Mic ENC, Low Latency Mode, 12mm Drivers, Rapid Charge, IPX5, Smart Touch Controls (ChromeX - Dark Knight)",
    productPrice: 1199,
    rating: 3.6,
  },
  {
    id: 58,
    category: "electronics",
    subCategory: "headphones",
    productImage1:
      "https://m.media-amazon.com/images/I/612aeStmuLL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71XTv+1QReL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71Ug-5O2VuL._SL1500_.jpg",
    productTitle:
      "JBL Tour One M2 Adaptive Noise Cancelling Over-Ear Headphones, Spatial Sound, Personi-Fi 2.0, Smart Ambient, 50 Hours Playtime, BT 5.3 LE, Quick Charge, Multi Point Conectivity Built-in Alexa (Black)",
    productPrice: 24894,
    rating: 4.6,
  },
  {
    id: 59,
    category: "electronics",
    subCategory: "headphones",
    productImage1:
      "https://m.media-amazon.com/images/I/61x4yN6eUVL._SL1356_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/61ag5oPn-rL._SL1110_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/512Ls0shnDL._SL1500_.jpg",
    productTitle:
      "Marshall Major IV Wireless Bluetooth On Ear Headphone with Mic (Brown)",
    productPrice: 12999,
    rating: 4.3,
  },
  {
    id: 60,
    category: "electronics",
    subCategory: "headphones",
    productImage1:
      "https://m.media-amazon.com/images/I/61Qqg+T8nsL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/511UQqBFsJL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/61lEskbCaoL._SL1500_.jpg",
    productTitle:
      "Samsung Galaxy Buds2 Pro, Bluetooth Truly Wireless in Ear Earbuds with Noise Cancellation (Graphite, with Mic)",
    productPrice: 17990,
    rating: 4.4,
  },

  {
    id: 61,
    category: "electronics",
    subCategory: "televisionandvideo",
    productImage1:
      "https://m.media-amazon.com/images/I/81wxS8abrgL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71Dd2MPw54L._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71B9xqsEjsL._SL1500_.jpg",
    productTitle:
      "Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black)",
    productPrice: 74990,
    rating: 4.6,
  },


  {
    id: 62,
    category: "electronics",
    subCategory: "televisionandvideo",
    productImage1:
      "https://m.media-amazon.com/images/I/7132bixhytL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71TfmiZ85CL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/811yOe5UyfL._SL1500_.jpg",
    productTitle:
      "Redmi 108 cm (43 inches) 4K Ultra HD Android Smart LED TV X43 | L43R7-7AIN (Black)",
    productPrice: 26999,
    rating: 4.5,
  },
  {
    id: 63,
    category: "electronics",
    subCategory: "televisionandvideo",
    productImage1:
      "https://m.media-amazon.com/images/I/71RhIMc2TBL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71Q2yVuz5oL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71Slm2lTKPL._SL1500_.jpg",
    productTitle:
      "Samsung 138 cm (55 inches) Crystal 4K Neo Series Ultra HD Smart LED TV UA55AUE65AKXXL (Black)",
    productPrice: 46990,
    rating: 3.5,
  },
  {
    id: 64,
    category: "electronics",
    subCategory: "televisionandvideo",
    productImage1:
      "https://m.media-amazon.com/images/I/81I5oICiIzL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71oVhKd-tTL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71va59Rm7HL._SL1500_.jpg",
    productTitle:
      "OnePlus 126 cm (50 inches) Y Series 4K Ultra HD Smart Android LED TV 50Y1S Pro (Black)",
    productPrice: 30499,
    rating: 4.3,
  },
  {
    id: 65,
    category: "electronics",
    subCategory: "televisionandvideo",
    productImage1:
      "https://m.media-amazon.com/images/I/81N--AIhfxL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71hFO8Z0tgL._SL1417_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/51wvDvSktkL._SL1500_.jpg",
    productTitle:
      "Acer 109 cm (43 inches) Advanced I Series 4K Ultra HD Smart LED Google TV AR43GR2851UDFL (Black)",
    productPrice: 2499,
    rating: 4.1,
  },
  {
    id: 66,
    category: "electronics",
    subCategory: "televisionandvideo",
    productImage1:
      "https://m.media-amazon.com/images/I/91OzzQSg47L._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/815KVsbPlpL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/81-NF9Z2MBL._SL1500_.jpg",
    productTitle:
      "LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UQ7500PSF (Ceramic Black)",
    productPrice: 30490,
    rating: 4.3,
  },
  {
    id: 67,
    category: "electronics",
    subCategory: "televisionandvideo",
    productImage1:
      "https://m.media-amazon.com/images/I/81UT46-gwRL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/81gZWnpLTGL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71GBPfV0BBL._SL1500_.jpg",
    productTitle:
      "MI 125 cm (50 inches) X Series 4K Ultra HD Smart Android LED TV L50M7-A2IN (Black)",
    productPrice: 3499,
    rating: 4.2,
  },
  {
    id: 68,
    category: "electronics",
    subCategory: "televisionandvideo",
    productImage1:
      "https://m.media-amazon.com/images/I/71Y9kiW1wlL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/51EXF9v8BZL._SL1000_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/61P4HR0iFYL._SL1000_.jpg",
    productTitle:
      "Hisense 108 cm (43 inches) Bezelless Series 4K Ultra HD Smart LED Google TV 43A6H (Black)",
    productPrice: 26990,
    rating: 4.1,
  },
  {
    id: 69,
    category: "electronics",
    subCategory: "televisionandvideo",
    productImage1:
      "https://m.media-amazon.com/images/I/71m5u2hTVjL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/713rM2vloXL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/718uqYh9siL._SL1500_.jpg",
    productTitle:
      "TCL 108 cm (43 inches) Bezel-Less Series 4K Ultra HD Smart LED Google TV 43P635 (Black)",
    productPrice: 25990,
    rating: 4.5,
  },
  {
    id: 70,
    category: "electronics",
    subCategory: "televisionandvideo",
    productImage1:
      "https://m.media-amazon.com/images/I/71g3OF4CL9L._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/81zj2CqZZ-L._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/81frboMPbpL._SL1500_.jpg",
    productTitle:
      "Redmi 108 cm (43 inches) Android 11 Series Full HD Smart LED TV L43M6-RA/L43M7-RA (Black)",
    productPrice: 21999,
    rating: 4.7,
  },
  {
    id: 71,
    category: "electronics",
    subCategory: "televisionandvideo",
    productImage1:
      "https://m.media-amazon.com/images/I/81+JXgPUDLL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/81SCXU879zL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/81ZJ2jRyzYL._SL1500_.jpg",
    productTitle:
      "Samsung 138 cm (55 inches) Crystal iSmart 4K Ultra HD Smart LED TV UA55CUE60AKLXL (Black)",
    productPrice: 47990,
    rating: 3.9,
  },
  {
    id: 72,
    category: "electronics",
    subCategory: "televisionandvideo",
    productImage1:
      "https://m.media-amazon.com/images/I/71RNJ5AGNBL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71FR3nKjHZL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71COLHs11yL._SL1500_.jpg",
    productTitle:
      "Acer 139 cm (55 inches) I Series 4K Ultra HD Android Smart LED TV AR55AR2851UDFL (Black)",
    productPrice: 29999,
    rating: 3.6,
  },
  {
    id: 73,
    category: "electronics",
    subCategory: "televisionandvideo",
    productImage1:
      "https://m.media-amazon.com/images/I/71hXI6RMKXL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71kKc8J3UlL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71jYD5D6MLL._SL1500_.jpg",
    productTitle:
      "iFFALCON 108 cm (43 inches) 4K Ultra HD Smart LED Google TV iFF43U62 (Black)",
    productPrice: 21999,
    rating: 4.2,
  },
  {
    id: 74,
    category: "electronics",
    subCategory: "televisionandvideo",
    productImage1:
      "https://m.media-amazon.com/images/I/71qYTCZ+jrL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/81RMTmg4nQL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/81g7sK5mAhL._SL1500_.jpg",
    productTitle:
      "VW 109 cm (43 inches) Linux Series Frameless Full HD Smart LED TV VW43S1 (Black)",
    productPrice: 13999,
    rating: 4.3,
  },
  {
    id: 75,
    category: "electronics",
    subCategory: "televisionandvideo",
    productImage1:
      "https://m.media-amazon.com/images/I/713a3sAjiGL._SL1500_.jpg",
    productImage2:
      "https://m.media-amazon.com/images/I/71+DCRVHDsL._SL1500_.jpg",
    productImage3:
      "https://m.media-amazon.com/images/I/71w-2uxDs5L._SL1500_.jpg",
    productTitle:
      "Onida 108 cm (43 inches) Full HD Smart LED Fire TV 43FIF3 (Black)",
    productPrice: 21990,
    rating: 4.1,
  },




  {
        id: 91,
        category: "fashion",
        subCategory: "fashion",
        productImage1:
          "https://m.media-amazon.com/images/I/61+OnW2GPGL._UL1440_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/61--63BPmlL._UL1440_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61zzbO6HklL._UL1440_.jpg",
        productTitle: "BULLMER Mens Cotton Henley Neck/Chinese Collar Tshirt",
        productPrice: 354,
        rating: 4.1,
      },
      {
        id: 92,
        category: "fashion",
        subCategory: "fashion",
        productImage1:
          "https://m.media-amazon.com/images/I/61fzbOrJyML._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/61Ck+vrpocL._UL1440_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61EMUpVDj7L._UL1440_.jpg",
        productTitle:
          "ATICX Men's Slim Fit Polyester Sleeveless T Shirt - Sando Top Tank Muscle Tee for Sports, Gym, Running",
        productPrice: 249,
        rating: 4,
      },
      {
        id: 93,
        category: "fashion",
        subCategory: "fashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71V0UjkEnpL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/81Ag3+FM-TL._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/71KNiM4dNKL._UL1500_.jpg",
        productTitle:
          "Maniac Mens Printed Round Neck Half Sleeve Purple and White Cotton Oversized T-Shirt",
        productPrice: 599,
        rating: 3.9,
      },
      {
        id: 94,
        category: "fashion",
        subCategory: "fashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71ssF1s7V1L._UY550_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71kc3no8ODL._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/81ohJVWRobL._UL1500_.jpg",
        productTitle: "Amazon Brand - Inkast Denim Co. Men's Slim Fit Casual Shirt",
        productPrice: 699,
        rating: 4.5,
      },
      {
        id: 95,
        category: "fashion",
        subCategory: "fashion",
        productImage1:
          "https://m.media-amazon.com/images/I/51oqHcH9mcL._UL1440_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/81DAgwETgpL._UL1440_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/71YWTgu+U2L._UL1440_.jpg",
        productTitle:
          "Dennis Lingo Men's Cotton Buffalo Check Slim Fit Casual Shirt with Pocket, Full Sleeve Shirt for Formal & Casual Wear",
        productPrice: 649,
        rating: 3.7,
      },
      {
        id: 96,
        category: "fashion",
        subCategory: "fashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71T-utEUZxL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/911y3EHluiL._UL1440_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/81OvQDjG0rL._UL1440_.jpg",
        productTitle:
          "Dennis Lingo Men's Striped Slim Fit Oxford Cotton Casual Shirt with Button Down Collar & Full Sleeves",
        productPrice: 690,
        rating: 4.7,
      },
      {
        id: 97,
        category: "fashion",
        subCategory: "fashion",
        productImage1:
          "https://m.media-amazon.com/images/I/81Vn0Boy9eL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/819KPgjasVL._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/81YXKCOKShL._UL1500_.jpg",
        productTitle: "Levi's Men's 511 Styled Slim Fit Jeans",
        productPrice: 1421,
        rating: 4.8,
      },
      {
        id: 98,
        category: "fashion",
        subCategory: "fashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71cioZQWYeL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/81dNPIv6xML._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/71KFLL21QYL._UL1500_.jpg",
        productTitle: "Levi's Men's 512 Slim Tapered Fit Jeans",
        productPrice: 1699,
        rating: 4.1,
      },
      {
        id: 99,
        category: "fashion",
        subCategory: "fashion",
        productImage1:
          "https://m.media-amazon.com/images/I/61202kcgy5L._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/61cZ4o5AKZL._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/51NW865Zh9L._UL1500_.jpg",
        productTitle: "Peter England Men's Slim Jeans",
        productPrice: 2099,
        rating: 4.6,
      },
      {
        id: 100,
        category: "fashion",
        subCategory: "fashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71T-yPIj-sL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71WPnv8-daL._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/718OmjcMnKL._UL1500_.jpg",
        productTitle:
          "MEERA FAB Women's Cotton Printed Pink Anarkali Kurta with Palazzo & Dupatta Set",
        productPrice: 806,
        rating: 3.7,
      },
      {
        id: 101,
        category: "fashion",
        subCategory: "fashion",
        productImage1:
          "https://m.media-amazon.com/images/I/61Kp-+0GrHL._UL1280_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/91v8-1JlolL._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/91ndrnmEs3L._UL1500_.jpg",
        productTitle: "GoSriKi Women Kurta with Pant & Dupatta",
        productPrice: 659,
        rating: 4.2,
      },
      {
        id: 102,
        category: "fashion",
        subCategory: "fashion",
        productImage1:
          "https://m.media-amazon.com/images/I/51dZ19miAbL._UL1440_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/51yYRttRUFL._UL1440_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61yTb8brZUL._UL1440_.jpg",
        productTitle:
          "GoSriKi Women's Cotton Blend Embroidered Straight Kurta (Stho-White-Nw2-GS)",
        productPrice: 469,
        rating: 3.9,
      },
      {
        id: 103,
        category: "fashion",
        subCategory: "fashion",
        productImage1: "https://m.media-amazon.com/images/I/51YUdTGQZtL.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/61DB1xBOUyL._UL1024_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61YQNQoQU4L._UL1024_.jpg",
        productTitle:
          "GRECIILOOKS Women's Casual Digital Printed Shirt Ruffle Sleeve Tops | Floral Printed Shaded Shirt for Women |Casual Short Sleeve Oversized Blouses Tops",
        productPrice: 299,
        rating: 3.5,
      },
      {
        id: 104,
        category: "fashion",
        subCategory: "fashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71D71aU1zxL._UL1198_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71vxEWqxuNL._UL1198_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/71YvI0JBoKL._UL1198_.jpg",
        productTitle:
          "REORIA Women’s Sexy Sleeveless Racer Back Halter Neck Bodysuit Tank Tops",
        productPrice: 299,
        rating: 4.3,
      },
      {
        id: 105,
        category: "fashion",
        subCategory: "fashion",
        productImage1:
          "https://m.media-amazon.com/images/I/6109c+c00qL._UX522_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/618CPRmzIIL._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/51Gn0stHLrL._UL1500_.jpg",
        productTitle:
          "OM SAI LATEST CREATION Women's Lycra Striped Tie-Dye T-Shirt for Women Western Tees Travel, Casual, Night Wear Western Tops",
        productPrice: 349,
        rating: 4.5,
      },
      {
        id: 106,
        category: "fashion",
        subCategory: "mensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/712XTTg1j6L._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71xExo9YsiL._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/71E9ZoTvltL._UL1500_.jpg",
        productTitle: "Amazon Brand - Symbol Men Polo Shirt",
        productPrice: 499,
        rating: 4.1,
      },
      {
        id: 107,
        category: "fashion",
        subCategory: "mensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71j++pbaQ9L._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/61BcpA1lgeL._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61vlnRsV7gL._UL1500_.jpg",
        productTitle:
          "LEOTUDE Oversized Half Sleeve Printed Men's Combo T-Shirt (Pack of 2)",
        productPrice: 494,
        rating: 4.1,
      },
      {
        id: 108,
        category: "fashion",
        subCategory: "mensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/81pPCgAKvCL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71hhJcmPMSL._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/91S9jyTikBL._UL1500_.jpg",
        productTitle: "Allen Solly Casual Shirt",
        productPrice: 799,
        rating: 4.5,
      },
      {
        id: 109,
        category: "fashion",
        subCategory: "mensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/51Wcry5WUHL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/614XpiTNZoL._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/51a8bock+pL._UL1440_.jpg",
        productTitle: "Veirdo Men T-Shirt",
        productPrice: 449,
        rating: 4.8,
      },
      {
        id: 110,
        category: "fashion",
        subCategory: "mensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/615OFA2LHML._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/710jmT+UG2L._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/71d2XXD9ySL._UL1500_.jpg",
        productTitle:
          "Amazon Brand - Symbol Men's Relaxed Fit Jeans (SS20-NS-SY-RS01_Jet Black_40W x 32L)",
        productPrice: 649,
        rating: 3.6,
      },
      {
        id: 111,
        category: "fashion",
        subCategory: "mensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/61Hdox5R96L._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/61eFFUtEFaL._UL1440_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61uc-+3uESL._UL1440_.jpg",
        productTitle:
          "Urbano Plus Men's Black Regular Fit Washed Jeans Stretchable",
        productPrice: 849,
        rating: 3.5,
      },
      {
        id: 112,
        category: "fashion",
        subCategory: "mensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/61QGzNhSAeL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/616uCKf5DoL._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/71t04Zs4mCL._UL1500_.jpg",
        productTitle: "HIGH STAR Men Jeans",
        productPrice: 549,
        rating: 4.1,
      },
      {
        id: 113,
        category: "fashion",
        subCategory: "mensfashion",
        productImage1: "https://m.media-amazon.com/images/I/31ESWFjUO9L.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/51Bz1fEj1jL._UL1000_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/516LiU70FiL._UL1000_.jpg",
        productTitle:
          "NEVER LOSE Mens 2 Pack Polyester Yoga Short Men Summer Running Gym Sports Shorts with Pockets Shorts for Men",
        productPrice: 719,
        rating: 4.3,
      },
      {
        id: 114,
        category: "fashion",
        subCategory: "mensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71ePojXLFzL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71zN+VHh+oL._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/912GlrOOzwL._UL1500_.jpg",
        productTitle: "U.S. POLO ASSN. Men's Regular Shorts",
        productPrice: 500,
        rating: 3.6,
      },
      {
        id: 115,
        category: "fashion",
        subCategory: "mensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/81XwVOiXXAL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/719Fl6yXb7L._UL1500_.jpg",
        productImage3: "https://m.media-amazon.com/images/I/41tfpqjacDL.jpg",
        productTitle:
          "LookMark Men's Cotton Blend Stitched Printed Half Sleeve Shirt",
        productPrice: 329,
        rating: 4.2,
      },
      {
        id: 116,
        category: "fashion",
        subCategory: "mensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71q1591-bHL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71byXXp-zWL._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/91z0XoQciKL._UL1500_.jpg",
        productTitle: "Red Tape Men Navy Blue Full Sleeve Shirt",
        productPrice: 999,
        rating: 4.2,
      },
      {
        id: 117,
        category: "fashion",
        subCategory: "mensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71gDaT2Po2L._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/81Uds8+WchL._UL1440_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/71RU6JIIJdL._UL1440_.jpg",
        productTitle: "Dennis Lingo Men's Cotton Slim Fit Casual Shirt",
        productPrice: 599,
        rating: 3.8,
      },
      {
        id: 118,
        category: "fashion",
        subCategory: "mensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/61A4ludC4QL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/61oDFzh+f3L._UL1440_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61xz9xEUU9L._UL1440_.jpg",
        productTitle:
          "ALAWING Print Baseball Cap Men Cotton Hat Women Fashion Sweatproof and Breathable Unisex Adjustable Hat",
        productPrice: 598,
        rating: 3.8,
      },
      {
        id: 119,
        category: "fashion",
        subCategory: "mensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/51MORTuytNL._UL1200_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/51buJ8c2QqL._UX679_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61IyywQhSrL._UX679_.jpg",
        productTitle: "Puma Unisex-Adult Cap",
        productPrice: 700,
        rating: 4.6,
      },
      {
        id: 120,
        category: "fashion",
        subCategory: "mensfashion",
        productImage1: "https://m.media-amazon.com/images/I/41YComssGEL.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/61y2yFeWC9L._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61Gp7kphehL._UL1500_.jpg",
        productTitle: "Eaglebuzz Unisex Cotton Baseball Cap Black Free Size",
        productPrice: 498,
        rating: 3.5,
      },
      {
        id: 121,
        category: "fashion",
        subCategory: "womensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71-agVsgaRL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/81304YkKzbL._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/81sGXBnmhtL._UL1500_.jpg",
        productTitle:
          "Lymio Tops for Women || Tops for Women Women Tops || Tops || top for Women || top || Women top (598-601)",
        productPrice: 249,
        rating: 3.6,
      },
      {
        id: 122,
        category: "fashion",
        subCategory: "womensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/615pREhXdPL._UY741_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/616ZCYYLBwL._UY741_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61Y9xfsn3WL._UY741_.jpg",
        productTitle: "Aahwan Women's & Girls' Solid Ribbed Square Neck Tank Tops",
        productPrice: 301,
        rating: 4.1,
      },
      {
        id: 123,
        category: "fashion",
        subCategory: "womensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/61P3cFXpW8L._UY550_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/61onqprKOyL._UY550_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/51XJmNgSzIL._UY550_.jpg",
        productTitle:
          "SIGHTBOMB Square Neck Puff Sleeves Ruched Waist Crop TOP for Women",
        productPrice: 499,
        rating: 3.9,
      },
      {
        id: 124,
        category: "fashion",
        subCategory: "womensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/61-eglgl4rL._UY741_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/51Lbkrb8RlL._UY741_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61wUexnBoML._UY741_.jpg",
        productTitle: "Kotty Women's Relaxed Fit Cotton Jeans",
        productPrice: 598,
        rating: 4.7,
      },
      {
        id: 125,
        category: "fashion",
        subCategory: "womensfashion",
        productImage1: "https://m.media-amazon.com/images/I/31Y4oZCtpUL.jpg",
        productImage2: "https://m.media-amazon.com/images/I/317vplB+SxL.jpg",
        productImage3: "https://m.media-amazon.com/images/I/318qw3nD9qL.jpg",
        productTitle: "KOTTY Women's Relaxed Jeans",
        productPrice: 497,
        rating: 3.4,
      },
      {
        id: 126,
        category: "fashion",
        subCategory: "womensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/61z0aa5PJ5L._UY741_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/61+FqeKKUVL._UY741_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61SUdzqROFL._UY741_.jpg",
        productTitle: "Allen Solly Women's Relaxed Fit Cotton Jean",
        productPrice: 1459,
        rating: 3.8,
      },
      {
        id: 127,
        category: "fashion",
        subCategory: "womensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/61LN-y1hC2L._UX425_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/8104GG3E1SL._UX425_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/51EuYqRlHRL._UX425_.jpg",
        productTitle: "Tommy Hilfiger Women T-Shirt",
        productPrice: 1499,
        rating: 3.9,
      },
      {
        id: 128,
        category: "fashion",
        subCategory: "womensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71qV-M23duL._UX569_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71VZGfLh1kL._UX569_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/71eLADwY94L._UX569_.jpg",
        productTitle: "Tommy Hilfiger Synthetic Shift Dress",
        productPrice: 2296,
        rating: 4.1,
      },
      {
        id: 129,
        category: "fashion",
        subCategory: "womensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/81XtXNsE8SL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71HORElj56L._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/71mqcZ06arL._UL1500_.jpg",
        productTitle: "Tommy Hilfiger Women's Relaxed Pants",
        productPrice: 3149,
        rating: 3.7,
      },
      {
        id: 130,
        category: "fashion",
        subCategory: "womensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/817oHzEETSL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/814JDMsLDdL._UY550_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/81zF4T10wQL._UY550_.jpg",
        productTitle: "Tommy Hilfiger Women's Slim Fit Pants",
        productPrice: 2388,
        rating: 3.2,
      },
      {
        id: 131,
        category: "fashion",
        subCategory: "womensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/91ud7UGyBYL._UL1500_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/91KOUv3cD-L._UL1500_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/81+fdFV-hkL._UL1500_.jpg",
        productTitle: "Tommy Hilfiger Women's Striped Loose Fit Top",
        productPrice: 2759,
        rating: 2.7,
      },
      {
        id: 132,
        category: "fashion",
        subCategory: "womensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/518Do9xAjUL._UX679_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/61hJUOalaSL._UY741_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61kYjgGHhVL._UY741_.jpg",
        productTitle:
          "true Browns Women's Light Green Bandhani Printed Silk Sleevesless Jacket Pant Set",
        productPrice: 3599,
        rating: 4.5,
      },
      {
        id: 133,
        category: "fashion",
        subCategory: "womensfashion",
        productImage1: "https://m.media-amazon.com/images/I/4120oLV7J+S.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71eAcfNzIwS._UY679_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/712u+XPBZJS._UY679_.jpg",
        productTitle: "Masaba Bud Sharara Set",
        productPrice: 4999,
        rating: 4.2,
      },
      {
        id: 134,
        category: "fashion",
        subCategory: "womensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/81KOnn1GW+L._UY741_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/81VicLMHLaL._UY741_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/81dBk++C9+L._UY741_.jpg",
        productTitle: "Label RITU KUMAR Blue Floral Print Maxi Dress",
        productPrice: 3450,
        rating: 4.1,
      },
      {
        id: 135,
        category: "fashion",
        subCategory: "womensfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/517-Ux68fOL._UX522_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/51BLJUyNFrL._UX522_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/51fpBH0eLbL._UX522_.jpg",
        productTitle: "Levi's Women's Western Casual Pants",
        productPrice: 1019,
        rating: 3.7,
      },
      {
        id: 136,
        category: "fashion",
        subCategory: "kidsfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/51P1J97tb4L._UY741_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/817hcGA4BwL._UX679_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/91LGFFOX+kL._UY741_.jpg",
        productTitle: "TAGAS Baby-Girls Dress",
        productPrice: 459,
        rating: 3.8,
      },
      {
        id: 137,
        category: "fashion",
        subCategory: "kidsfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/51UjUExg-FL._UX679_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/51zxl7-r+0L._UX679_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/51iu1ikmxcL._UX679_.jpg",
        productTitle: "My Lil Princess Girls' Dress",
        productPrice: 949,
        rating: 4.5,
      },
      {
        id: 138,
        category: "fashion",
        subCategory: "kidsfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/51tADDC2BNL._UY741_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/618lhBfmZ3L._UY741_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/514Y5mWAmVL._UY741_.jpg",
        productTitle: "Naughty Ninos Girl's Regular Overalls",
        productPrice: 549,
        rating: 4.6,
      },
      {
        id: 139,
        category: "fashion",
        subCategory: "kidsfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71Bs+95oCOL._UX679_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/513qvVES9VL._UX679_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/617wCli+p1L._UX679_.jpg",
        productTitle:
          "Kuchipoo Boys Regular Fit Cotton T-Shirt - Combo of 5 (KUC-TSHRT-149)",
        productPrice: 551,
        rating: 2.9,
      },
      {
        id: 140,
        category: "fashion",
        subCategory: "kidsfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71Xil6TWrtL._UX569_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71gHMfYFS0L._UX569_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/71s9ggm6WWL._UX569_.jpg",
        productTitle: "Amazon Brand - Jam & Honey Boy's Regular Fit T-Shirt",
        productPrice: 776,
        rating: 3.5,
      },
      {
        id: 141,
        category: "fashion",
        subCategory: "kidsfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/91SuBZTLMGL._UX679_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/91SK9JhATWL._UX679_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/91ZulQ5lX9L._UX569_.jpg",
        productTitle: "Allen Solly Junior Boy's T-Shirt",
        productPrice: 490,
        rating: 3.6,
      },
      {
        id: 142,
        category: "fashion",
        subCategory: "kidsfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/61k-7wDEdtL._UX522_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/61B61+Lw+KL._UX522_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61tuwvy2n+L._UX522_.jpg",
        productTitle:
          "EIO® 100% Cotton Rompers Sleepsuits Jumpsuit Night Suits for Infants Newborn Baby Boys & Girls Pack of 3",
        productPrice: 599,
        rating: 4.1,
      },
      {
        id: 143,
        category: "fashion",
        subCategory: "kidsfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/51l2P47f0YL._UX466_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/51DShlKIvRL._UX466_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61C2+Ag1ybL._UX466_.jpg",
        productTitle:
          "Googogaaga Boy's Cotton Dino Printed T-shirt With Shorts Sets of baby boys clothing Sets",
        productPrice: 468,
        rating: 4.4,
      },
      {
        id: 144,
        category: "fashion",
        subCategory: "kidsfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/81xt5yh6nTL._UX522_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/81nwAU9NhtL._UX522_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/91uK+0GdQOL._UX522_.jpg",
        productTitle:
          "ARIEL Baby Boys & Baby girls Cotton Printed Round Neck Half Sleeve T-shirt & Short Latest Summer Clothing Sets",
        productPrice: 284,
        rating: 3.6,
      },
      {
        id: 145,
        category: "fashion",
        subCategory: "kidsfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/710Rr6g0U4L._UY741_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71pP7CcTyeL._UY741_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/71m6MOW3beL._UY741_.jpg",
        productTitle: "Arshia Fashions Suit Set for Girls |Kurta Pajama",
        productPrice: 599,
        rating: 4.1,
      },
      {
        id: 146,
        category: "fashion",
        subCategory: "kidsfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/81NPsP8uHFL._UY741_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71S0JEm0IRL._UY741_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/71ju00zEbnL._UY741_.jpg",
        productTitle:
          "AHHAAAA Kids Ethnic Banarasi Silk Waistcoat Kurta and Pyjama Set for Boys",
        productPrice: 1199,
        rating: 3.6,
      },
      {
        id: 147,
        category: "fashion",
        subCategory: "kidsfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71OqojNLjiL._UY741_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71l89jh5bpL._UY741_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/71+il3AgwmL._UY741_.jpg",
        productTitle: "ADIVA Girl's Silk Blend Readymade Lehenga Choli Set",
        productPrice: 1235,
        rating: 4.6,
      },
      {
        id: 148,
        category: "fashion",
        subCategory: "kidsfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/81ujbvQj8sL._UX679_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71rb-7rHZtL._UY741_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/916NXJfPFmL._UY741_.jpg",
        productTitle:
          "TotzTouch Cotton Girls Night Wear T Shirt & Pyjama | Night Dress for Girl Kids | Night Dresses Tee Top & Pajama Pant Set of 3 & 2 (Size Options - Age 6 Months to 10 Years)",
        productPrice: 1044,
        rating: 4.2,
      },
      {
        id: 149,
        category: "fashion",
        subCategory: "kidsfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/61ZHnnxGnoL._UX569_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/61qa+kejK4L._UX569_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/61xFv0A-IbL._UX569_.jpg",
        productTitle:
          "superminis Boy's & Girl's Cotton Printed Night Suit Set Pack of 1",
        productPrice: 499,
        rating: 4.5,
      },
      {
        id: 150,
        category: "fashion",
        subCategory: "kidsfashion",
        productImage1:
          "https://m.media-amazon.com/images/I/71GVE1XdOXL._UX679_.jpg",
        productImage2:
          "https://m.media-amazon.com/images/I/71ZO7OAAngL._UX679_.jpg",
        productImage3:
          "https://m.media-amazon.com/images/I/71BmUH+tgGL._UX569_.jpg",
        productTitle:
          "Chheent Boy's & Girl's Cotton All Over Print Sleep Suit, Comfortable Night Suit for Girls and Boys Pack of 1",
        productPrice: 1135,
        rating: 4.8,
      },




//   {
//     id: 76,
//     category: "electronics",
//     subCategory: "smarthome",
//     productImage1:
//       "https://m.media-amazon.com/images/I/41Iv9y0SEZL._SL1280_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61WjxH0opAL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71yDQ9ro5DL._SL1500_.jpg",
//     productTitle:
//       "Yale YDME 100 NxT, Smart Door Lock with Biometric, Pincode, RFID Card & Mechanical Keys, Color- Black, for Home & Office (Free Installation)",
//     productPrice: 14499,
//     rating: 4.2,
//   },
//   {
//     id: 77,
//     category: "electronics",
//     subCategory: "smarthome",
//     productImage1: "https://m.media-amazon.com/images/I/41v69yDejAL.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51qkBdfmymS._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg",
//     productTitle:
//       "Echo Dot (Black) Combo with Wipro 9W Smart Color Bulb - Smart Home Starter Kit",
//     productPrice: 3299,
//     rating: 4.1,
//   },
//   {
//     id: 78,
//     category: "electronics",
//     subCategory: "smarthome",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61-ma3J-6QL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/816Vrv3x-WL._SL1280_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/515vypGaiBL._SL1280_.jpg",
//     productTitle:
//       "HomeMate WiFi Smart LED Surface Light | 15 Watt | 16 Million Colors + Warm and Cool White | Compatible with Alexa, Google Home & Siri | With Last State Memory Feature",
//     productPrice: 1599,
//     rating: 3.6,
//   },
//   {
//     id: 79,
//     category: "electronics",
//     subCategory: "smarthome",
//     productImage1:
//       "https://m.media-amazon.com/images/I/41GSN6QPnHL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/610mFtj7sJL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61LCwzpv9pL._SL1500_.jpg",
//     productTitle:
//       "Luminous Audie 1200mm Smart Ceiling Fan for Home and Office with Remote, IoT, Works with Alexa (Mirage White)",
//     productPrice: 3799,
//     rating: 4.1,
//   },
//   {
//     id: 80,
//     category: "electronics",
//     subCategory: "smarthome",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71sxV50LV4L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71MEpbZCr3L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71+n1fGyJwL._SL1500_.jpg",
//     productTitle:
//       "Wipro 16A Wi-Fi Smart Plug with Energy Monitoring- Suitable for Large Appliances like Geysers, Microwave Ovens, Air Conditioners (Works with Alexa and Google Assistant)- White",
//     productPrice: 899,
//     rating: 4.5,
//   },
//   {
//     id: 81,
//     category: "electronics",
//     subCategory: "smarthome",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61XL2jzXhTL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/810QYgxnI3L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71GQffl91rL._SL1500_.jpg",
//     productTitle:
//       "TP-Link Tapo 360° 2MP 1080p Full HD Pan/Tilt Home Security Wi-Fi Smart Camera| Alexa Enabled| 2-Way Audio| Night Vision| Motion Detection| Sound and Light Alarm| Indoor CCTV (Tapo C200) White",
//     productPrice: 2499,
//     rating: 3.9,
//   },
//   {
//     id: 82,
//     category: "electronics",
//     subCategory: "smarthome",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61IfOpQwIEL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61+H0rsBOKL._SL1000_.jpg",
//     productTitle: "Echo Dot (3rd Gen) - Smart speaker with Alexa (Black)",
//     productPrice: 2999,
//     rating: 4.7,
//   },
//   {
//     id: 83,
//     category: "electronics",
//     subCategory: "smarthome",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61HTU-A6JnL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71xFsIuRA+L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81DJUIPspkL._SL1500_.jpg",
//     productTitle:
//       "Jiffy 14L Plastic Automatic Smart Sensor Dustbin with Lid for Home, Office, Kitchen, Bathroom, Room (Baby Pink)(Motion-Sensor)",
//     productPrice: 2599,
//     rating: 3.6,
//   },
//   {
//     id: 84,
//     category: "electronics",
//     subCategory: "smarthome",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61qopcViLTL._SX425_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61uW1cF9ZPS._SL1080_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61YAyyqP8AS._SL1080_.jpg",
//     productTitle:
//       "PowerMax Fitness TDA-230 (4HP Peak) Smart Folding Electric Treadmill with Auto Incline, MP3, Speaker, DIY and Virtual Assistance, Exercise Machine for Home Gym and Cardio Training",
//     productPrice: 36005,
//     rating: 4.2,
//   },
//   {
//     id: 85,
//     category: "electronics",
//     subCategory: "smarthome",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61KbKniufrL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51m0HN0xjCL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/614ySFB9fcL._SL1500_.jpg",
//     productTitle:
//       "Wipro Smart Switch Module, 4 Switch Control Compatible with Alexa & Google Home (Pack of 1,White)",
//     productPrice: 1991,
//     rating: 3.9,
//   },
//   {
//     id: 86,
//     category: "electronics",
//     subCategory: "smarthome",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71APrMSElrL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81mpLoFJiXL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71ekc9COiwL._SL1500_.jpg",
//     productTitle:
//       "HomeMate Wi-Fi Multicolour Smart LED Strip Kit | 5 Meters | Music Sync Feature | No Hub Required | Works with Amazon Alexa, Google Home & Siri (RGB 5 Meter Kit)",
//     productPrice: 1649,
//     rating: 4.5,
//   },
//   {
//     id: 87,
//     category: "electronics",
//     subCategory: "smarthome",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61CfU4Euz1L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61esHLmbjcL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71qDwQ13CJL._SL1500_.jpg",
//     productTitle:
//       "PHILIPS Smart Wi-Fi LED T-Beamer 20-Watt 2-Feet (Pack of 1, Shades of White + Tunable + Dimmable + Pre-Set Modes, Compatible with Amazon Alexa and Google Assistant, B22, Pack of 1)",
//     productPrice: 1059,
//     rating: 4.1,
//   },
//   {
//     id: 88,
//     category: "electronics",
//     subCategory: "smarthome",
//     productImage1:
//       "https://m.media-amazon.com/images/I/513puen7X3L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71UqSg8EqWL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/718qTUb7faL._SL1500_.jpg",
//     productTitle:
//       "winPlus Wireless Door Bell for Home Long Range, Waterproof Calling Bell for Office, Self-Powered Battery Free Cordless Door Bell, up to 1000ft Range with 32 Chimes, LED Light, 4-Level Volume（White 1 Transmitter & 2 Receivers）",
//     productPrice: 1899,
//     rating: 3.6,
//   },
//   {
//     id: 89,
//     category: "electronics",
//     subCategory: "smarthome",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61LOXIR83SL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71cV-ickxOL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61lPcAKY+vL._SL1500_.jpg",
//     productTitle:
//       "All-New Echo Dot (5th Gen, 2023 release) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor, Alexa and Bluetooth| Blue",
//     productPrice: 5499,
//     rating: 4.5,
//   },
//   {
//     id: 90,
//     category: "electronics",
//     subCategory: "smarthome",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61QnbFC35UL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51C+FWhW9xL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61Fq+sUtZcL._SL1000_.jpg",
//     productTitle:
//       "Echo Show 8 (2nd Gen, 2021 release)- Smart speaker with 8 HD screen, stereo sound & hands - free entertainment with Alexa(Black) ",
//     productPrice: 13999,
//     rating: 4.8,
//   },
//  
//   {
//     id: 151,
//     category: "homeandkitchen",
//     subCategory: "homeandkitchen",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51d3dpDJpZL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71ICgvub2BL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71gNPdykvOL._SL1500_.jpg",
//     productTitle:
//       "Eureka Forbes Aquaguard Ritz RO+UV+MTDS+Alkaline Boost Water Purifier with Eureka Forbes with UV e-Boiling Mineral Guard Technology Water saving (White)",
//     productPrice: 9998,
//     rating: 4.1,
//   },
//   {
//     id: 152,
//     category: "homeandkitchen",
//     subCategory: "homeandkitchen",
//     productImage1:
//       "https://m.media-amazon.com/images/I/41Bzi3Rek-L._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61P95bp6CGL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61FS2HzgL8L._SL1000_.jpg",
//     productTitle:
//       "HUL Pureit Revito Prime Mineral RO+MF+UV in-Tank 7 stage 8L Water purifier with DURAViva technology (Black)",
//     productPrice: 17999,
//     rating: 4.5,
//   },
//   {
//     id: 153,
//     category: "homeandkitchen",
//     subCategory: "homeandkitchen",
//     productImage1:
//       "https://m.media-amazon.com/images/I/41XljH4YBaL._SX300_SY300_QL70_FMwebp_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61Byo+npN-L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/713DJ0tO5iL._SL1500_.jpg",
//     productTitle:
//       "V-Guard RequPro True High Recovery RO UV UF Water Purifier | 8 Stage Purification with Mineral Health Charger | 60% Water Recovery & 100% RO Purified Water | Free PAN India Installation & 1-Year Comprehensive Warranty | Black",
//     productPrice: 14299,
//     rating: 2.9,
//   },
//   {
//     id: 154,
//     category: "homeandkitchen",
//     subCategory: "homeandkitchen",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71QFx-Hs4nL._SX466_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51ahYc3z4mL._SL1358_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/51aCaMPNvML._SL1484_.jpg",
//     productTitle:
//       "VK Furniture Solid Sheesham Wood Wooden Four Seater Dining Table| Sheesham Wood Wooden Dining Set 4 Seater | Dining Table Set with 4 Chairs(Warm Chestnut Finish) | Wooden Four Seater Dining Table with 4 Chairs with Cushion for Dining Room Home | W 30 X D 45 X H 30",
//     productPrice: 13999,
//     rating: 4.3,
//   },
//   {
//     id: 155,
//     category: "homeandkitchen",
//     subCategory: "homeandkitchen",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71O0xhf6MFS._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71O0xhf6MFS._SL1500_.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/31LIXZKe-1S.jpg",
//     productTitle:
//       "STREAM FURNITURE Solid Sheesham Wood 4 Seater Dining Table with Chair Set | Wooden 4 Seater Dining Table Set | Dining Table Sets | Dining Room Furniture | 4 Seater Dining Table | 4 Seater,Teak",
//     productPrice: 15499,
//     rating: 3.7,
//   },
//   {
//     id: 156,
//     category: "homeandkitchen",
//     subCategory: "homeandkitchen",
//     productImage1:
//       "https://m.media-amazon.com/images/I/413sK6yat-L._SX300_SY300_QL70_FMwebp_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71AZJ1yxnUL._SX522_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61kH5BgFffL._SL1500_.jpg",
//     productTitle:
//       "Lifelong LLMG23 Power Pro 500-Watt Mixer Grinder with 3 Jars (Liquidizing, Wet Grinding and Chutney Jar), Stainless Steel blades, 1 Year Warranty (Black)",
//     productPrice: 1349,
//     rating: 3.6,
//   },
//   {
//     id: 157,
//     category: "homeandkitchen",
//     subCategory: "homeandkitchen",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51Ck4wmBbSL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61jd61YbmLL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61Dm6YyoBeL._SL1500_.jpg",
//     productTitle:
//       "Bajaj Rex 500W Mixer Grinder with Nutri-Pro Feature, 3 Jars, White",
//     productPrice: 2269,
//     rating: 4.2,
//   },
//   {
//     id: 158,
//     category: "homeandkitchen",
//     subCategory: "homeandkitchen",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71mL2bdyRdL._SX522_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/810hj5njxHL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/718Onpj91SL._SL1500_.jpg",
//     productTitle:
//       "Philips HL7756/00 Mixer Grinder 750 Watt , 3 Stainless Steel Multipurpose Jars with 3 Speed Control and Pulse function (Black)",
//     productPrice: 3699,
//     rating: 4.1,
//   },
//   {
//     id: 159,
//     category: "homeandkitchen",
//     subCategory: "homeandkitchen",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81yobRRV8nL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71YfEtIYqDL._SL1280_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/814kF8nmkNL._SL1500_.jpg",
//     productTitle: "Cookwell Bullet Mixer Grinder (5 Jars, 3 Blades, Silver)",
//     productPrice: 2478,
//     rating: 3.5,
//   },
//   {
//     id: 160,
//     category: "homeandkitchen",
//     subCategory: "homeandkitchen",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61J398ocuaL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81OTvqq36GL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/616k77sBT+L._SL1100_.jpg",
//     productTitle:
//       "Wonderchef Nutri-blend Mixer, Grinder & Blender | Powerful 400W 22000 RPM motor | Stainless steel Blades | 2 unbreakable jars | 2 Years warranty | Online recipe book by Chef Sanjeev Kapoor | Black",
//     productPrice: 2699,
//     rating: 4.3,
//   },
//   {
//     id: 161,
//     category: "homeandkitchen",
//     subCategory: "homeandkitchen",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61uE9aOtNzL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71v2XiHl6iL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71pVDcgAfgL._SL1500_.jpg",
//     productTitle:
//       "Activa Easy Mix Nutri Mixer Grinder 500 Watt | Long Lasting Shock Proof ABS Body | Heavy Duty Motor With Nano - Grinding Technology",
//     productPrice: 1249,
//     rating: 3.5,
//   },
//   {
//     id: 162,
//     category: "homeandkitchen",
//     subCategory: "homeandkitchen",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61DAkNxj9uL._SL1080_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71AFHgMn+KL._SL1080_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61vul64rLCL._SL1000_.jpg",
//     productTitle:
//       "Pigeon by Stovekraft Cruise 1800 watt Induction Cooktop (Black)",
//     productPrice: 1599,
//     rating: 3.6,
//   },
//   {
//     id: 163,
//     category: "homeandkitchen",
//     subCategory: "homeandkitchen",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81od9GbumhL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81JEghi-2FL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81QcfjR9zRL._SL1500_.jpg",
//     productTitle:
//       "Prestige PIC 20 1600 Watt Induction Cooktop with Push button (Black)",
//     productPrice: 2099,
//     rating: 3.5,
//   },
//   {
//     id: 164,
//     category: "homeandkitchen",
//     subCategory: "homeandkitchen",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71hs7OkrR4L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/8157R27RaRL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81zxYo9o-KL._SL1500_.jpg",
//     productTitle:
//       "Philips Viva Collection Hd4938/01 2100-Watt Glass Induction Cooktop With Sensor Touch (Black), Sealed",
//     productPrice: 4699,
//     rating: 4.5,
//   },
//   {
//     id: 165,
//     category: "homeandkitchen",
//     subCategory: "homeandkitchen",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71ZmmLW97YL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81c5HOkoC4L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81l+cX9SMaL._SL1500_.jpg",
//     productTitle: "Cello Checkers Plastic PET Canister Set, 18 Pieces, Clear",
//     productPrice: 667,
//     rating: 4.3,
//   },
//   {
//     id: 166,
//     category: "homeandkitchen",
//     subCategory: "kitchenanddining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71yDJ-UNHYL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61JlnUav6TL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/715S4tlVu9L._SL1500_.jpg",
//     productTitle:
//       "Signoraware 4.5 Litres Modular Multi-Purpose Plastic Containers with Lid for Kitchen Storage | Food Grade BPA Free Leak Proof | Spices Atta Grains and More Organizers (4500ml, Blue)",
//     productPrice: 339,
//     rating: 4.1,
//   },
//   {
//     id: 167,
//     category: "homeandkitchen",
//     subCategory: "kitchenanddining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61Rpg73BNOL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/713kpDpTBZL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71W64jsnK6L._SL1500_.jpg",
//     productTitle:
//       "Bergner Essential Plus Non-Stick 4Pc-Cookware Set (Kadhai with Glass Lid 2.6 L, Dosa Tawa 28cm, Fry Pan 24cm) Induction Compatible, Bakelite Handles, PFOA Free, Black",
//     productPrice: 1499,
//     rating: 4.6,
//   },
//   {
//     id: 168,
//     category: "homeandkitchen",
//     subCategory: "kitchenanddining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51fVI4e-uvL._SL1080_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61C82tjIqlL._SL1080_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/51aqvkf1PLL._SL1080_.jpg",
//     productTitle:
//       "Pigeon by Stovekraft 12734 Induction Base Inner Lid Aluminium Pressure Cooker, 5L, Silver",
//     productPrice: 925,
//     rating: 4.2,
//   },
//   {
//     id: 169,
//     category: "homeandkitchen",
//     subCategory: "kitchenanddining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61hrxZq1saL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61e-72RyFSL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/619Eg6JGBaL._SL1000_.jpg",
//     productTitle:
//       "Borosil Insulated Lunch Box, Set of 4, 280 ml x 2, 180 ml x 2 (Stainless Steel, Silver Grey)",
//     productPrice: 1399,
//     rating: 3.1,
//   },
//   {
//     id: 170,
//     category: "homeandkitchen",
//     subCategory: "kitchenanddining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81mcLxn++pL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81KOzauptdL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/41pdWs6AdSL._SL1500_.jpg",
//     productTitle:
//       "Cello Amitabh Bachchan Opalware Solitaire Series Blu Dinner Set, 33Pcs | Opal Glass Dinner Set for 6 | Crockery Set for Festive Ocassions, Parties | White Plate and Bowl Set",
//     productPrice: 3384,
//     rating: 3.5,
//   },
//   {
//     id: 171,
//     category: "homeandkitchen",
//     subCategory: "kitchenanddining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/5161jBjZmfS._SL1100_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61PVESRqfMS._SL1100_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/51M6poIaB6S._SL1100_.jpg",
//     productTitle:
//       "Glen 4 Burner Built in Glass Gas Hob with European Sealed Triple Ring Burners, Auto Ignition, Black (1073 TR)",
//     productPrice: 8875,
//     rating: 4.2,
//   },
//   {
//     id: 172,
//     category: "homeandkitchen",
//     subCategory: "kitchenanddining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/818o0M0MBsL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/614Zm5a2QvL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/6137UdjV8ML._SL1500_.jpg",
//     productTitle:
//       "Signoraware Bake 'N' Serve Rectangular Bakeware Safe and Oven Safe Glass Dish Tray | Borosilicate Glass Bowl Container | Microwave Oven Safe Baking (1000ml, Set of 1, Clear)",
//     productPrice: 380,
//     rating: 2.5,
//   },
//   {
//     id: 173,
//     category: "homeandkitchen",
//     subCategory: "kitchenanddining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71kKZrnSj-S._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61CHoDxO6KL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61aZ5Du-bKL._SL1000_.jpg",
//     productTitle:
//       "Prestige Aluminium Omega Select Plus IB Non-Stick Omni Tawa, 27.5 cm, Multicolour, Medium",
//     productPrice: 786,
//     rating: 4.6,
//   },
//   {
//     id: 174,
//     category: "homeandkitchen",
//     subCategory: "kitchenanddining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61Rh0oXtQ8S._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71loeAV75jL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61DdH0VcCuL._SL1000_.jpg",
//     productTitle:
//       "Hawkins 22 cm Appe Pan, Non Stick Paniyaram Pan with Glass Lid, 12 Cups Paniyarakkal Ceramic Pan, Litti Pan, Kuzhi Paniyaram Pan, Ponganalu Pan, Red (NAPE22G)",
//     productPrice: 1235,
//     rating: 3.9,
//   },
//   {
//     id: 175,
//     category: "homeandkitchen",
//     subCategory: "kitchenanddining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61lWvNlOzTL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61JIvacr7bL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71G+xlcFD9L._SL1500_.jpg",
//     productTitle:
//       "MILTON Executive Insulated Lunch Box (2 Stainless Steel Container, 280 ml Each; 1 Microwave Safe Container, 450 ml), Green",
//     productPrice: 356,
//     rating: 4.8,
//   },
//   {
//     id: 176,
//     category: "homeandkitchen",
//     subCategory: "kitchenanddining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81rH77WKrlL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81uJDVdZ3ZL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71L0543pWTL._SL1500_.jpg",
//     productTitle:
//       "Milton Flip Lid 350 Thermosteel 24 Hours Hot and Cold Water Bottle with Bag, 1 Piece, 350 ml, Silver | Leak Proof | Office Bottle | Gym Bottle | Home | Kitchen | Hiking | Trekking | Travel Bottle",
//     productPrice: 569,
//     rating: 3.6,
//   },
//   {
//     id: 177,
//     category: "homeandkitchen",
//     subCategory: "kitchenanddining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61tQmEcxlZS._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61EtXqfgFPS._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/41vPTxFvqTS._SL1000_.jpg",
//     productTitle:
//       "Larah by Borosil Green Leaves Silk Series Opalware Dinner Set, 35 Pieces, White",
//     productPrice: 1999,
//     rating: 4.7,
//   },
//   {
//     id: 178,
//     category: "homeandkitchen",
//     subCategory: "kitchenanddining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71VI3TQu8nL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61getV74sgL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71IbqD7APsL._SL1500_.jpg",
//     productTitle:
//       "Milton Orchid 1500 Inner Steel Casserole, 1260 ml, Pink | PU Insulated | BPA free |Odour Proof | Food Grade | Easy to Carry | Easy to Store | Ideal For Chapatti | Roti | Curd Maker",
//     productPrice: 338,
//     rating: 4.1,
//   },
//   {
//     id: 179,
//     category: "homeandkitchen",
//     subCategory: "kitchenanddining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/41zOQ1h-NbL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51GBR01mmvL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61+MGEMyVJL._SL1000_.jpg",
//     productTitle:
//       "Borosil Carafe Flame Proof Glass Kettle with Strainer 650 ml Transparent",
//     productPrice: 542,
//     rating: 3.5,
//   },
//   {
//     id: 180,
//     category: "homeandkitchen",
//     subCategory: "kitchenanddining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81Ck-Ep1ysL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/8159+tN-gOL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81eBpEAA5DL._SL1500_.jpg",
//     productTitle:
//       "Amazon Brand - Solimo STAINLESS STEEL INSULATED SOLID ROTI SERVER, 1.1 L, SILVER",
//     productPrice: 499,
//     rating: 3.8,
//   },
//   {
//     id: 181,
//     category: "homeandkitchen",
//     subCategory: "furniture",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51Jot2RfYaL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61SHUkCpq3L._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71C7R8NXYGL._SL1500_.jpg",
//     productTitle:
//       "Sleepyhead Flip - Dual Sided High Density Foam Mattress with Firm & Soft Sides, (78x60x5 inches, Queen Size)",
//     productPrice: 8498,
//     rating: 3.7,
//   },
//   {
//     id: 182,
//     category: "homeandkitchen",
//     subCategory: "furniture",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81fxp-1G8IL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71lwSEFImkL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61PumAzGBML._SL1280_.jpg",
//     productTitle:
//       "Comforto Siesta 4 Inch Dual Comfort Single Size Foam Mattress (72x30x4 Inch) - Mattress in a Box",
//     productPrice: 4166,
//     rating: 3.9,
//   },
//   {
//     id: 183,
//     category: "homeandkitchen",
//     subCategory: "furniture",
//     productImage1:
//       "https://m.media-amazon.com/images/I/7125TBE2d-L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71jJgHK9v+L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61ECfqNNQvL._SL1500_.jpg",
//     productTitle:
//       "The Sleep Company SmartGRID Stylux Ergo High-Back Home & Office Chair | Patented SmartGRID Technology | SpinePro Adjustable Cushioned Ergonomic Lumbar Support for Desk Chair | Enduring Design | Grey",
//     productPrice: 17999,
//     rating: 4.1,
//   },
//   {
//     id: 184,
//     category: "homeandkitchen",
//     subCategory: "furniture",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81tRDRrGoxL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/611Jg4GqNUL._SL1200_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71xnz85Hz7L._SL1500_.jpg",
//     productTitle:
//       "Green Soul Monster Ultimate Series T Multi-Functional Ergonomic Gaming Chair with Premium Spandex & PU Leather Fabric, Adjustable Neck & Lumbar Pillow, 4D Adjustable Armrests & Heavy Duty Metal Base (Black & Red)",
//     productPrice: 17990,
//     rating: 3.9,
//   },
//   {
//     id: 185,
//     category: "homeandkitchen",
//     subCategory: "furniture",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71tiVjTiRUL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61cXHyyOwHL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/617QFWnJRkL._SL1500_.jpg",
//     productTitle:
//       "Green Soul® Jupiter Superb Office Chair, High Back Mesh Ergonomic Home Office Desk Chair with 2D Adjustable Armrests & Lumbar Support, Smart Multi-Tilt Lock Mechanism & Heavy Duty Metal Base (Black)",
//     productPrice: 8990,
//     rating: 4.5,
//   },
//   {
//     id: 186,
//     category: "homeandkitchen",
//     subCategory: "furniture",
//     productImage1:
//       "https://m.media-amazon.com/images/I/7109a8Q0ZmL._SX522_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/A1rIvs2FhqL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/91aGxY-yO3L._SL1500_.jpg",
//     productTitle: "La-Z-boy Pinnacle Recliner For Living Room",
//     productPrice: 75000,
//     rating: 5,
//   },
//   {
//     id: 187,
//     category: "homeandkitchen",
//     subCategory: "furniture",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61m3SAwsEFL._SL1100_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51fDZUIPq-L._SL1100_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/41zkm0jQLlL._SL1100_.jpg",
//     productTitle: "Casacomfort Livino 3 Seater Fabric Sofa Set (Dark Grey)",
//     productPrice: 11996,
//     rating: 4.6,
//   },
//   {
//     id: 188,
//     category: "homeandkitchen",
//     subCategory: "furniture",
//     productImage1:
//       "https://m.media-amazon.com/images/I/713VTIhCfOL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81rxlTIHRUL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61P73cChC6L._SL1500_.jpg",
//     productTitle:
//       "uberlyfe 3 Seater Sofa Cum Bed - Jute Fabric Washable Cover - Dark Grey with 2 Cushions(Zigzag Pattern) | 6' X 6' Feet",
//     productPrice: 11499,
//     rating: 3.5,
//   },
//   {
//     id: 189,
//     category: "homeandkitchen",
//     subCategory: "furniture",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61BPggw2Y7L._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51HF3nYou0L._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/51tWrPXuY9L._SL1000_.jpg",
//     productTitle:
//       "Wakefit Bed | 1 Year Warranty | Double Bed, Queen Size Bed, Orion Upholstered Engineered Wood Bed with Storage, Wooden Bed (Columbian Walnut_Omega Pearl)",
//     productPrice: 14787,
//     rating: 4.8,
//   },
//   {
//     id: 190,
//     category: "homeandkitchen",
//     subCategory: "furniture",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61XYeK2lNPL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61xJp3F7W+L._SL1178_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71jafXk2JoL._SL1178_.jpg",
//     productTitle:
//       "APRODZ Jere King Size Upholstered Bed with 4 Drawers for Bedroom (Suede Fabric Upholstery - Grey)",
//     productPrice: 43999,
//     rating: 4.3,
//   },
//   {
//     id: 191,
//     category: "homeandkitchen",
//     subCategory: "furniture",
//     productImage1: "https://m.media-amazon.com/images/I/21DRid8ACDL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/31Nha3aw2rL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/41g4HvEe15L.jpg",
//     productTitle:
//       "Ikea Tuffing Bunk Bed Frame, Dark Grey 90X200 Cm (35 3/8X78 3/4 Inch), (Base Material: Steel, Epoxy Polyester Powder Coating Fabric: 100 % Polyester) (Single, Painted Finish)",
//     productPrice: 17999,
//     rating: 4.2,
//   },
//   {
//     id: 192,
//     category: "homeandkitchen",
//     subCategory: "furniture",
//     productImage1:
//       "https://m.media-amazon.com/images/I/41n43wNXtVL._SX300_SY300_QL70_FMwebp_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/816ADNoK5dL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71SsmhYpuvL._SL1500_.jpg",
//     productTitle:
//       "Amazon Brand - Solimo Medusa 4 Door Engineered Wood Wardrobe with Drawer and Mirror (Wenge finish)",
//     productPrice: 17499,
//     rating: 3.8,
//   },
//   {
//     id: 193,
//     category: "homeandkitchen",
//     subCategory: "furniture",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61PYG9DrydL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/611y5mFiuZL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/710CPz9wRWL._SL1500_.jpg",
//     productTitle:
//       "Wakefit Wardrobe | 1 Year Warranty | Wooden Almirah for Clothes, Twill 2 Door Without Mirror, No Drawer & No Hanging Space (Gingham- 18 mm Panels in Matt Finish)",
//     productPrice: 8195,
//     rating: 3.5,
//   },
//   {
//     id: 194,
//     category: "homeandkitchen",
//     subCategory: "furniture",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81Vg6rYbFbL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81R4NhoZ29L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81u+GsfcXiL._SL1500_.jpg",
//     productTitle:
//       "Amazon Brand - Solimo Alpha 4 Door Engineered Wood Wardrobe with Drawer (Imperial Teak Finish)",
//     productPrice: 17499,
//     rating: 4.3,
//   },
//   {
//     id: 195,
//     category: "homeandkitchen",
//     subCategory: "furniture",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71ct0ZaJSxL._SX466_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71znvnyud8L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71cy5RuAUaL._SL1500_.jpg",
//     productTitle:
//       "Ebansal Solid Sheesham Wood 3 Door Wardrobe for Bedroom | Wooden Three Door Almirah for Home with 3 Drawers & Multiple Utility Storage | Cupboard Organiser | Clothes Organizer | Rosewood, Honey Finish",
//     productPrice: 45399,
//     rating: 4.6,
//   },
//   {
//     id: 196,
//     category: "homeandkitchen",
//     subCategory: "homedecor",
//     productImage1:
//       "https://m.media-amazon.com/images/I/91yMZriwFTL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81fxqAdeETL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81hD5CsniGL._SL1500_.jpg",
//     productTitle:
//       "Estele 24KT Gold Plated Lord Tirupati Balaji Idol Showpiece for Pooja Mandir/Home Decorative",
//     productPrice: 539,
//     rating: 4.6,
//   },
//   {
//     id: 197,
//     category: "homeandkitchen",
//     subCategory: "homedecor",
//     productImage1:
//       "https://m.media-amazon.com/images/I/813CR+KSbCL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81XvaVdxABL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81TOIQtvgSL._SL1500_.jpg",
//     productTitle:
//       "Satyam Kraft 3 Pcs Artificial Bougainvillea Glabra Fake Plant Flowers for Home, Room, Office, Bedroom, Balcony, Living Room, Table Decoration, Plants and Craft Items Corner (Without Vase Pot) (Purple",
//     productPrice: 559,
//     rating: 2.9,
//   },
//   {
//     id: 198,
//     category: "homeandkitchen",
//     subCategory: "homedecor",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81apeUgFdoS._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71ti1MGbF-S._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81p1B4Lwm1S._SL1500_.jpg",
//     productTitle:
//       "Chumbak Teal Peacock Pride Wall Clock - Maroon Rim, Home Decor, Wall Decor, Wall Hanging, Analogue Clock",
//     productPrice: 1019,
//     rating: 4.1,
//   },
//   {
//     id: 199,
//     category: "homeandkitchen",
//     subCategory: "homedecor",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81jZy7pSR7L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61IvrlzIfKL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71C9RT5+4fL._SL1000_.jpg",
//     productTitle:
//       "Xtore Beautiful Finish Uniquely Hand Crafted Home Dcor African Tribal Women Art Piece - (Set of 3, Multicolour), Resin",
//     productPrice: 899,
//     rating: 4.5,
//   },
//   {
//     id: 200,
//     category: "homeandkitchen",
//     subCategory: "homedecor",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71BZdXcRCFL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71OjXStzjTL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71GmkSsZb1L._SL1500_.jpg",
//     productTitle:
//       "LIFEHAXTORE Seven Lucky Running Vastu Horses Art Framed Painting (Sunset Oranage, 12 Inch x 18 Inch) multicolor",
//     productPrice: 299,
//     rating: 3.8,
//   },
//   {
//     id: 201,
//     category: "homeandkitchen",
//     subCategory: "homedecor",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61+hLmdD6UL._SL1500_.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/51O3Z37URlL.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71tWOwHInTL._SL1303_.jpg",
//     productTitle:
//       "Xtore® 12pcs 3D Home Decor Butterfly with Sticking Pad (Shimmer Golden, Set of 12)",
//     productPrice: 219,
//     rating: 4.1,
//   },
//   {
//     id: 202,
//     category: "homeandkitchen",
//     subCategory: "homedecor",
//     productImage1:
//       "https://m.media-amazon.com/images/I/715FZjjmYaL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71eumB0piFL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81n56-vCgLL._SL1500_.jpg",
//     productTitle:
//       "PAPER PLANE DESIGN Aesthetic Boho Posters For Room Decoration Set Of 12, A4 size (29 x 21 cm)",
//     productPrice: 159,
//     rating: 3.8,
//   },
//   {
//     id: 203,
//     category: "homeandkitchen",
//     subCategory: "homedecor",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81BuluNKUUL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71SkWYJ1t0L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/714mPYyNXyL._SL1500_.jpg",
//     productTitle:
//       "Kawai Homes Paintings Modern Cute Wall Decor Framed Poster Paintings For Living Room Bedroom Decor (Scandinavian)",
//     productPrice: 630,
//     rating: 4.6,
//   },
//   {
//     id: 204,
//     category: "homeandkitchen",
//     subCategory: "homedecor",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71qP-FINXtL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61SLcOg3P2L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61+KCjg36fL._SL1500_.jpg",
//     productTitle:
//       "Homesake® Macrame Wall Hanging Decor, Home Decor, Wall Shelves, Wall Hangings for Home Decoration, Wall Decor, Room Decor Items for Bedroom, Aesthetic Room Decor, Wall Hanging, Bedroom Decoration Items, Gift Items, Triangle Floating Shelf - (Modern Boho, 71 X 40 cm)",
//     productPrice: 295,
//     rating: 3.7,
//   },
//   {
//     id: 205,
//     category: "homeandkitchen",
//     subCategory: "homedecor",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81-OSHBnEgL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61Pvf2-K1xL._SL1438_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71g48DkJ6pL._SL1500_.jpg",
//     productTitle:
//       "JH Gallery Handcrafted Rajasthani Door/Wall Hanging Decorative Hanging/Wall Hanging/Home Decor/Home Furnishing/Diwali Gift/Corporate Gift (Bells, Pack of 2, Multi-Colour)",
//     productPrice: 312,
//     rating: 3.6,
//   },
//   {
//     id: 206,
//     category: "homeandkitchen",
//     subCategory: "homedecor",
//     productImage1: "https://m.media-amazon.com/images/I/516gCP4xewL.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81bSoD59t7L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71OKUkHwfuL._SL1500_.jpg",
//     productTitle:
//       "eCraftIndia Ganesh Deepak with Bell Brass Wall Hanging (11 cm x 8 cm x 24 cm, Brown)",
//     productPrice: 959,
//     rating: 4.4,
//   },
//   {
//     id: 207,
//     category: "homeandkitchen",
//     subCategory: "homedecor",
//     productImage1: "https://m.media-amazon.com/images/I/31+W3bgdDZL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/41HYVeYygNL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/410N2ip8AhL.jpg",
//     productTitle:
//       "BINSBARRY Oval shape adhesive mirror sticker for wall on tiles bathroom bedroom living room Basin Mirror Bathroom Wall Mirror Stickers unbreakable plastic wall mirror 30 * 20 cm (Wall Mirror)",
//     productPrice: 139,
//     rating: 3.6,
//   },
//   {
//     id: 208,
//     category: "homeandkitchen",
//     subCategory: "homedecor",
//     productImage1: "https://m.media-amazon.com/images/I/512keRz7JEL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/41OZgeHXIXL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/21rONyesjPL.jpg",
//     productTitle:
//       "AK LIGHTING MIRRORS 4000K LED Rectangular Wall Mount Mirror with Touch Switch'. (Neutral White, 24 X24Inch)",
//     productPrice: 6890,
//     rating: 4.6,
//   },
//   {
//     id: 209,
//     category: "homeandkitchen",
//     subCategory: "homedecor",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71d5bM2UF9L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81HngxLRqvL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/6141ZctQmbL._SL1500_.jpg",
//     productTitle:
//       "TIED RIBBONS Decorative Ceramic Flower Vase (Set of 2, Multi, 9.8 & 5.5 Inches) for Home Décor Flowers Plants Living Room Bedroom Kitchen Office Wall Table Centerpiece Decoration Items",
//     productPrice: 849,
//     rating: 4.5,
//   },
//   {
//     id: 210,
//     category: "homeandkitchen",
//     subCategory: "homedecor",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81WWuDV6tyL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81JorLXD9JL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61whPVa8s8L._SL1280_.jpg",
//     productTitle:
//       "Glimpse Homes Ceramic Flower Vase | Set of 2 | Upbeat Face Vase 5.5 inches & Blowing Kiss Face Vase 6 inches (White, Raw Finish)",
//     productPrice: 1647,
//     rating: 3.4,
//   },
//   {
//     id: 211,
//     category: "homeandkitchen",
//     subCategory: "storageandorganization",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71zjvUApaRL._SL1200_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/612mSXDpYQL._SL1201_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/910RLDLEbfL._SL1500_.jpg",
//     productTitle:
//       "HomeStrap Set of 6 Non-Woven Printed Saree Cover/Cloth Storage/Organizer with Transparent Window (Grey)(Featured on Shark Tank)",
//     productPrice: 354,
//     rating: 4.5,
//   },
//   {
//     id: 212,
//     category: "homeandkitchen",
//     subCategory: "storageandorganization",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71U6o2muc2L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71gMSYE78+L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71yBZrgmkcL._SL1500_.jpg",
//     productTitle:
//       "Kuber Industries Saree Covers With Zip|Saree Covers For Storage|Saree Packing Covers For Wedding|Pack of 3 (Red)",
//     productPrice: 204,
//     rating: 4.3,
//   },
//   {
//     id: 213,
//     category: "homeandkitchen",
//     subCategory: "storageandorganization",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71JEunmpBvL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81ZeMJie0+L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/7158brgGcyL._SL1500_.jpg",
//     productTitle:
//       "LiMETRO STEEL Stainless Steel Foldable Cloth Dryer Stand Double Rack Cloth Stands for Drying Clothes Steel (Cross)",
//     productPrice: 1799,
//     rating: 3.5,
//   },
//   {
//     id: 214,
//     category: "homeandkitchen",
//     subCategory: "storageandorganization",
//     productImage1:
//       "https://m.media-amazon.com/images/I/715VAalt-KL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71x5lBdkWVL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71qquPnOZoL._SL1500_.jpg",
//     productTitle:
//       "Bathla Mobidry Neo-Foldable Clothes Drying Stand with Weather Resistant Alloy Steel Frame (Bright Orange)",
//     productPrice: 1699,
//     rating: 4.8,
//   },
//   {
//     id: 215,
//     category: "homeandkitchen",
//     subCategory: "storageandorganization",
//     productImage1:
//       "https://m.media-amazon.com/images/I/91BFIzADH8L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81foXI3FQzL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/612vQfFtF1L._SL1500_.jpg",
//     productTitle:
//       "Amazon Brand - Solimo 3-Door Foldable Wardrobe, 8 Racks, Brown (Plastic,Fabric)",
//     productPrice: 2299,
//     rating: 3.9,
//   },
//   {
//     id: 216,
//     category: "homeandkitchen",
//     subCategory: "storageandorganization",
//     productImage1:
//       "https://m.media-amazon.com/images/I/91a3Uz+Us+L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/91iXzRb9scL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/91yYHuy4FoL._SL1500_.jpg",
//     productTitle:
//       "https://m.media-amazon.com/images/I/91yYHuy4FoL._SL1500_.jpg",
//     productPrice: 1678,
//     rating: 4.3,
//   },
//   {
//     id: 217,
//     category: "homeandkitchen",
//     subCategory: "storageandorganization",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61XJhEKm3QL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71ZLmaKf1jL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/613LgTWW4jL._SL1500_.jpg",
//     productTitle:
//       "Kuber Industries 4 Shelf Closet Hanging Organizer, 4 Tier Closet Wardrobe Organizer Clothes Storage Hanger for Family Closet Bedroom, Foldable and Universal Fit (Brown)-KUBMART15323",
//     productPrice: 267,
//     rating: 3.7,
//   },
//   {
//     id: 218,
//     category: "homeandkitchen",
//     subCategory: "storageandorganization",
//     productImage1: "https://m.media-amazon.com/images/I/31hmQqq7KsL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/21YztqmCE-L.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/31cXnrzSfKL.jpg",
//     productTitle:
//       "Kuber Industries Nylon Mesh Laundry Basket|Sturdy Material & Durable Handles|Netted Lightweight Laundry Bag (Assorted)",
//     productPrice: 87,
//     rating: 4.2,
//   },
//   {
//     id: 219,
//     category: "homeandkitchen",
//     subCategory: "storageandorganization",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71LX24shyGL._SL1100_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61DnstFQM0L._SL1100_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61pxLu+SWTL._SL1100_.jpg",
//     productTitle:
//       "PrettyKrafts Laundry Basket for clothes with Lid & Handles, Toys Organiser, 75 Ltr Black & Grey",
//     productPrice: 345,
//     rating: 3.9,
//   },
//   {
//     id: 220,
//     category: "homeandkitchen",
//     subCategory: "storageandorganization",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81WU4JCiGqL._SX425_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81J2zby1+8L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81sB7HiuKGL._SL1500_.jpg",
//     productTitle: "Benesta Multi-Purpose Shoe Rack - (5 Tier, Black)(Metal)",
//     productPrice: 1175,
//     rating: 4,
//   },
//   {
//     id: 221,
//     category: "homeandkitchen",
//     subCategory: "storageandorganization",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71CMeQcR3xL._SL1500_.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/415oLUwqzBL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/41w0lua-5-L.jpg",
//     productTitle: "Cello Novelty Compact Plastic Shoe Rack(Ice Brown)",
//     productPrice: 2999,
//     rating: 4.1,
//   },
//   {
//     id: 222,
//     category: "homeandkitchen",
//     subCategory: "storageandorganization",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61222hqXGrL._SL1302_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/718B3-9O7wL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61Nlyu-t-jL._SL1500_.jpg",
//     productTitle:
//       "Nayasa 2 In 1 Dustbin - Dry Waste and Wet Waste Step-On Dustbin (33 Ltrs) - Big, Plastic, Green & Blue",
//     productPrice: 1499,
//     rating: 5,
//   },
//   {
//     id: 223,
//     category: "homeandkitchen",
//     subCategory: "storageandorganization",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61MoUkxAaSL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71PkTCiQqVL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61fpjN7M7uL._SL1500_.jpg",
//     productTitle:
//       "Kolorr Magnum Plastic Pedal Dustbin Medium Size Trash Can Garbage Waste Bin with Lid for Home Kitchen Office Bathroom & Washroom – 6 Liters (Dark Brown)",
//     productPrice: 299,
//     rating: 3.2,
//   },
//   {
//     id: 224,
//     category: "homeandkitchen",
//     subCategory: "storageandorganization",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71PCkTz-HnL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61Nc5-A7L4L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71Nb2VxDPoL._SL1500_.jpg",
//     productTitle:
//       "HEMOVIA Under Sink Organizer, Sliding Under Bathroom Cabinet Storage Drawer Organizer Hanging Cup, Dividers, Handles, Multi-purpose Under Sink Shelf Organizer, Black (Under Sink Organizer)",
//     productPrice: 949,
//     rating: 4.5,
//   },
//   {
//     id: 225,
//     category: "homeandkitchen",
//     subCategory: "storageandorganization",
//     productImage1:
//       "https://m.media-amazon.com/images/I/6183kNYMnkL._SL1500_.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/51gvgMWdnyL.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61rhC5buWmL._SL1500_.jpg",
//     productTitle:
//       "Kuber Industries Multipurpose Solitaire Storage Basket with Lid|Strong Plastic Material & Side Grip|Size Small 25 x 19 x 10.5,Pack of 3 (Multi)-CTLTC010898",
//     productPrice: 356,
//     rating: 4.3,
//   },
//   {
//     id: 226,
//     category: "healthandpersonalcare",
//     subCategory: "healthandpersonalcare",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81acvJPczBL._SX569_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/910UPsCBx2L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71--r8irTgL._SL1500_.jpg",
//     productTitle: "Ariel Matic Liquid Detergent Top Load Refill Pouch, 2 Litr",
//     productPrice: 383,
//     rating: 4.1,
//   },
//   {
//     id: 227,
//     category: "healthandpersonalcare",
//     subCategory: "healthandpersonalcare",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71DySGgS2pL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71rP-8TOaVL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71dJpIzf82L._SL1500_.jpg",
//     productTitle:
//       "Odonil Bathroom Air Freshener Blocks Mixed Fragrances - 192g (48g*4) | Mixed Fragrances: Jamine, Lavender, Orchid, Rose| Long Lasting Fragrance",
//     productPrice: 172,
//     rating: 3.3,
//   },
//   {
//     id: 228,
//     category: "healthandpersonalcare",
//     subCategory: "healthandpersonalcare",
//     productImage1:
//       "https://m.media-amazon.com/images/I/615H69yDqeL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71mYJUdq1oL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71Qt4jgR0oL._SL1500_.jpg",
//     productTitle: "Ambi Pur Air Freshener - Sweet Berries - 275 g Spray",
//     productPrice: 284,
//     rating: 4.1,
//   },
//   {
//     id: 229,
//     category: "healthandpersonalcare",
//     subCategory: "healthandpersonalcare",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71hP1JEHDFL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71DdtCEQEsL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61ck3wxxxgL._SL1500_.jpg",
//     productTitle:
//       "Amazon Brand - Presto! Oxo-Biodegradable Garbage Bags, Medium -(19 x 21 inches) - 30 bags/roll (Pack of 6, Black)",
//     productPrice: 379,
//     rating: 3.5,
//   },
//   {
//     id: 230,
//     category: "healthandpersonalcare",
//     subCategory: "healthandpersonalcare",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71MG5JcqW+L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/519YjOYGxTL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/51w-3FZILyL._SL1000_.jpg",
//     productTitle:
//       "Colgate Gentle Enamel Ultra Soft Bristles Manual Toothbrush for adults, 4 Pcs (Buy2 Get 2), Soft Bristles for Enamel Care,Multicolor",
//     productPrice: 204,
//     rating: 4.1,
//   },
//   {
//     id: 231,
//     category: "healthandpersonalcare",
//     subCategory: "healthandpersonalcare",
//     productImage1:
//       "https://m.media-amazon.com/images/I/31+vRYTNhbL._SY300_SX300_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61RI75meZEL._SL1200_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61H0r+qZx1L._SL1200_.jpg",
//     productTitle:
//       "Mamaearth 100% Natural Berry Blast Kids Toothpaste, Oral Care, 50 Gm, Fluoride Free, Sls Free, No Artificial Flavours, Best For Baby",
//     productPrice: 114,
//     rating: 4.3,
//   },
//   {
//     id: 232,
//     category: "healthandpersonalcare",
//     subCategory: "healthandpersonalcare",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61l7GPMQXuL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/516xRWmFY5L._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61kEcHGssdL._SL1000_.jpg",
//     productTitle:
//       "Colgate Visible White O2 50g Teeth Whitening Toothpaste, Peppermint Sparkle, Active Oxygen Technology, Enamel Safe Teeth Whitening Product",
//     productPrice: 187,
//     rating: 4.9,
//   },
//   {
//     id: 233,
//     category: "healthandpersonalcare",
//     subCategory: "healthandpersonalcare",
//     productImage1:
//       "https://m.media-amazon.com/images/I/513IGMgoadL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/613lJAJx4AL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61pIrW6Xx7L._SL1000_.jpg",
//     productTitle:
//       "Lifebuoy Total 10 Activ Naturol Germ Protection Handwash Refill, 750 ml/725 ml",
//     productPrice: 104,
//     rating: 3.6,
//   },
//   {
//     id: 234,
//     category: "healthandpersonalcare",
//     subCategory: "healthandpersonalcare",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81ZB8bF8WgL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71KYIfTA-fL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61TJAqXANhL._SL1500_.jpg",
//     productTitle:
//       "Bombay Shaving Company Grooming Kit For Men | Shaving Kit for Men | Charcoal Scrub, Shaving Cream, Post Shave Balm, Charcoal Soap, Towel, Shaving Kit Bag | Gifts For Men,Gift Set For Men",
//     productPrice: 579,
//     rating: 3.9,
//   },
//   {
//     id: 235,
//     category: "healthandpersonalcare",
//     subCategory: "healthandpersonalcare",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61qGdMsns2L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71W9br+ensL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71H6c1mfzvL._SL1500_.jpg",
//     productTitle:
//       "Gillette Fusion Manual Razor for Men with Free Travel Case for Perfect Shave and Perfect Beard Shape",
//     productPrice: 359,
//     rating: 3.6,
//   },
//   {
//     id: 236,
//     category: "healthandpersonalcare",
//     subCategory: "healthandpersonalcare",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81l6O3oH6UL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/818k4GXBK9L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61esJZG-SML._SL1000_.jpg",
//     productTitle:
//       "Bombay Shaving Company Shaving & Grooming Kit For Men | Pack Contain Silver Metal Precision Safety Razor, Exfoliating Scrub, Shaving Cream, Post-Shave Balm, Shaving Brush & Feather Blades Nicely Packed In Gift Box |",
//     productPrice: 2499,
//     rating: 3.4,
//   },
//   {
//     id: 237,
//     category: "healthandpersonalcare",
//     subCategory: "healthandpersonalcare",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61FIk2+alhL._SY741_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/715ubHL8j4L._SL1440_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71CVpHGZH0L._SL1440_.jpg",
//     productTitle:
//       "Beardo Beard & Hair Growth Oil for thicker, longer beard | For patchy, uneven beard | Beard Oil for fast beard growth | Natural Hair Oil 50ml",
//     productPrice: 526,
//     rating: 4.2,
//   },
//   {
//     id: 238,
//     category: "healthandpersonalcare",
//     subCategory: "healthandpersonalcare",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51trC7uCwuL._SL1200_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51ACpEW9EHL._SL1200_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71N2gKgKksL._SL1200_.jpg",
//     productTitle: "Gillette Clear Gel - Cool Wave (113g)",
//     productPrice: 3490,
//     rating: 4.2,
//   },
//   {
//     id: 239,
//     category: "healthandpersonalcare",
//     subCategory: "healthandpersonalcare",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61efPbO0nIL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/614U7UgEZfL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61Y0ljqVL7L._SL1000_.jpg",
//     productTitle:
//       "Find Your Happy Place The Pure Bliss Set | Shower Gel + Body Lotion + Body Scrub + Body Mist | Paraben & Sulfate-free I Gift for Women",
//     productPrice: 2120,
//     rating: 3.1,
//   },
//   {
//     id: 240,
//     category: "healthandpersonalcare",
//     subCategory: "healthandpersonalcare",
//     productImage1:
//       "https://m.media-amazon.com/images/I/31M99IgCazL._SL1080_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51Dbk82KouL._SL1080_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/41wAbemj9lL._SL1080_.jpg",
//     productTitle: "Philips BT3125/15 Beard trimmer 20 Length Setting",
//     productPrice: 1634,
//     rating: 3.9,
//   },
//   {
//     id: 241,
//     category: "healthandpersonalcare",
//     subCategory: "householdsupplies",
//     productImage1:
//       "https://m.media-amazon.com/images/I/519GjhONdjL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71bZKF2QtKL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71HNovo3VPL._SL1438_.jpg",
//     productTitle:
//       "Ultrasonic Electric Pest Repellent Machine to Repel Lizard, Rat, Cockroach, Mosquito, Home Pest & Rodent Repelling Aid for Reject Ants Insect Control Mosquito Repellent for House (Z1)",
//     productPrice: 449,
//     rating: 4.3,
//   },
//   {
//     id: 242,
//     category: "healthandpersonalcare",
//     subCategory: "householdsupplies",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61TdDioKFJL._SL1500_.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/516SGIYb5HL.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61biASAS56L._SL1500_.jpg",
//     productTitle:
//       "Campfire Mosquito Bat with UV Light Lamp Five Nights Mosquito Killer Autokill 2-in-1 Mosquito Racket 1200mAh Lithium-ion Rechargeable Battery Handheld Electric Fly Swatter (White)",
//     productPrice: 749,
//     rating: 3.2,
//   },
//   {
//     id: 243,
//     category: "healthandpersonalcare",
//     subCategory: "householdsupplies",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71AfKPJFjoL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71XmN3ipZQL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81kK+5j9fpL._SL1500_.jpg",
//     productTitle: "Surf Excel Matic Liquid Detergent Front Load Pouch 2l",
//     productPrice: 448,
//     rating: 4.5,
//   },
//   {
//     id: 244,
//     category: "healthandpersonalcare",
//     subCategory: "householdsupplies",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71ZZDkET4LL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71nroafIu4L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/719o+OKcQZL._SL1500_.jpg",
//     productTitle:
//       "HIT Anti Roach Gel - Cockroach Killer (20g) | Kitchen Safe | Odourless | Fast and Convenient, Pack of 1",
//     productPrice: 257,
//     rating: 3.4,
//   },
//   {
//     id: 245,
//     category: "healthandpersonalcare",
//     subCategory: "householdsupplies",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71m-Gpu0spL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71YLhzz8yCL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61gAWx8qoUL._SL1500_.jpg",
//     productTitle:
//       "Amazon Brand - Solimo 3 Ply Toilet Paper/Tissue Roll - 12 Rolls (160 Pulls Per Roll)",
//     productPrice: 349,
//     rating: 3.1,
//   },
//   {
//     id: 246,
//     category: "healthandpersonalcare",
//     subCategory: "householdsupplies",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51fFgtFBshL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61rW8hF59qL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/617vpdjUq2L._SL1000_.jpg",
//     productTitle:
//       "Dettol Antiseptic Liquid for First Aid , Surface Disinfection and Personal Hygiene , 1000ml",
//     productPrice: 342,
//     rating: 4.2,
//   },
//   {
//     id: 247,
//     category: "healthandpersonalcare",
//     subCategory: "householdsupplies",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51RLCHjNuTL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71rXVX-DnxL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61HmdZRyOCL._SL1000_.jpg",
//     productTitle:
//       "Harpic Disinfectant Toilet Cleaner Liquid, Original - 1 Litre | Thick Toilet Cleaning Acid Suitable for Toilet Bowls",
//     productPrice: 195,
//     rating: 4.8,
//   },
//   {
//     id: 248,
//     category: "healthandpersonalcare",
//     subCategory: "householdsupplies",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61tJQVLMNCL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71c1GACakjL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61lpLoMLYYL._SL1500_.jpg",
//     productTitle:
//       "All Out Liquid Vaporizer Mosquito Repellent with 100% Knock Down rate, Kills Dengue, Malaria, and Chikungunya Mosquitoes, Refill Pack of 6 (45ml Each)",
//     productPrice: 374,
//     rating: 4.2,
//   },
//   {
//     id: 249,
//     category: "healthandpersonalcare",
//     subCategory: "householdsupplies",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61MKiHNCpyL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71oXT9v9ijL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/715+f1TqGcL._SL1500_.jpg",
//     productTitle:
//       "Godrej aer Matic Refill - Automatic Room Fresheners | Alive | 2200 Sprays Guaranteed | Lasts up to 60 days (225ml)",
//     productPrice: 252,
//     rating: 3.1,
//   },
//   {
//     id: 250,
//     category: "healthandpersonalcare",
//     subCategory: "householdsupplies",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51x+gheVPjL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/610jaBrutAL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61kZTQxcPTL._SL1000_.jpg",
//     productTitle:
//       "Lizol Disinfectant Surface & Floor Cleaner Liquid, Citrus - 2 Litre | Suitable for All Floor Cleaner Mops | Kills 99.9% Germs| India's #1 Floor Cleaner",
//     productPrice: 399,
//     rating: 3.9,
//   },
//   {
//     id: 251,
//     category: "healthandpersonalcare",
//     subCategory: "householdsupplies",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61taBfasvjL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81-KuosTKhL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71mwSV6NRaL._SL1500_.jpg",
//     productTitle:
//       "Bhimseni Kapoor 100gms, Original Camphor, Organic Kapur, Pacha Kapoor, karpooram Isoborneol Flakes",
//     productPrice: 270,
//     rating: 4.2,
//   },
//   {
//     id: 252,
//     category: "healthandpersonalcare",
//     subCategory: "householdsupplies",
//     productImage1: "https://m.media-amazon.com/images/I/51hAsv4xt4L.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/51xmJ-LmLHL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/614nR81OSLL.jpg",
//     productTitle:
//       "Harpic Flushmatic In-Cistern Toilet Cleaner Blocks, Marine - 150 g | Toilet Flush Cleaner Balls",
//     productPrice: 210,
//     rating: 3.2,
//   },
//   {
//     id: 253,
//     category: "healthandpersonalcare",
//     subCategory: "householdsupplies",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71kov3rMGtL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61Sw2uvpoXL._SL1500_.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/51ewl-J6zlL.jpg",
//     productTitle:
//       "SHYAM INNOVATIONS Ultrasonic Rat & Rodent Pest Repeller with a Wide Range to Repel Rats & Rodents Easy to Use for Office, Storeroom & Parking Area and Warehouse (3500 Sq. Feet)",
//     productPrice: 5999,
//     rating: 3.8,
//   },
//   {
//     id: 254,
//     category: "healthandpersonalcare",
//     subCategory: "householdsupplies",
//     productImage1:
//       "https://m.media-amazon.com/images/I/817HOi9iSjL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/810RmF7vESL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81uRMabURrL._SL1500_.jpg",
//     productTitle:
//       "ACTIVE Washing Machine Cleaner Descaler 24 Pack - Deep Cleaning Tablets For HE Front Loader & Top Load Washer, Clean Inside Drum And Laundry Tub Seal (Washing Machine Cleaner Tablets - 24 Pack)",
//     productPrice: 190,
//     rating: 3.1,
//   },
//   {
//     id: 255,
//     category: "healthandpersonalcare",
//     subCategory: "householdsupplies",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61bDa+IXnYS._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81xRJBqCeeL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61S1gOGQAwS._SL1000_.jpg",
//     productTitle:
//       "Surf Excel Matic 3 in 1 Smart Shots 17 pcs, Laundry Detergent Pods for Tough Stain Removal in Front Load & Top Load Washing Machines, Fragrance + Care. 17*26g",
//     productPrice: 306,
//     rating: 3.9,
//   },
//   {
//     id: 256,
//     category: "healthandpersonalcare",
//     subCategory: "beautytoolsandaccessories",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81X1sriXnAL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81IfdZBNP3L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/819CLLd8xVL._SL1500_.jpg",
//     productTitle: "Park Avenue Pure Luxury Soap Pack of 4 500gm",
//     productPrice: 201,
//     rating: 3.2,
//   },
//   {
//     id: 257,
//     category: "healthandpersonalcare",
//     subCategory: "beautytoolsandaccessories",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61WXUIJRoCL._SL1200_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71up76+Ri1L._SL1200_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61JKg6opxGL._SL1200_.jpg",
//     productTitle:
//       "Cinthol Cool Soap, 100g (Pack of 5) | with Icy-cool Menthol | Soaps For Bath | Grade 1 Soap | For All Skin Types",
//     productPrice: 208,
//     rating: 4.2,
//   },
//   {
//     id: 258,
//     category: "healthandpersonalcare",
//     subCategory: "beautytoolsandaccessories",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71t9JRry+3L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51tCUiLb0yL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61Q7h-OnvaL._SL1000_.jpg",
//     productTitle:
//       "Cetaphil Face Wash Gentle Skin Cleanser for Dry to Normal, Sensitive Skin, 125 ml Hydrating Face Wash with Niacinamide, Vitamin B5",
//     productPrice: 299,
//     rating: 4.3,
//   },
//   {
//     id: 259,
//     category: "healthandpersonalcare",
//     subCategory: "beautytoolsandaccessories",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51tXjE2WQQL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51Qk0YVgj+L._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61J+FA2W83L._SL1000_.jpg",
//     productTitle: "Himalaya Purifying Neem Face Wash, 400 Ml",
//     productPrice: 276,
//     rating: 4.1,
//   },
//   {
//     id: 260,
//     category: "healthandpersonalcare",
//     subCategory: "beautytoolsandaccessories",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51qpGr-1qzL._SL1280_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51oi39ZWclL._SL1280_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61jKaMBuosL._SL1280_.jpg",
//     productTitle:
//       "Minimalist 2% Salicylic Acid Face Wash For Oily Skin | Sulphate Free, Anti Acne Face Cleanser With Lha & Zinc For Acne Or Pimples | Men & Women 100 Ml",
//     productPrice: 284,
//     rating: 4.5,
//   },
//   {
//     id: 261,
//     category: "healthandpersonalcare",
//     subCategory: "beautytoolsandaccessories",
//     productImage1:
//       "https://m.media-amazon.com/images/I/419w4PBH11L._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51wfc4uFDYL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61WZo-0BOCL._SL1000_.jpg",
//     productTitle:
//       "Dove Deeply Nourishing Body Wash, With Moisturisers For Softer, Smoother Skin, For All Skin Type, 800 ml",
//     productPrice: 379,
//     rating: 4.1,
//   },
//   {
//     id: 262,
//     category: "healthandpersonalcare",
//     subCategory: "beautytoolsandaccessories",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71KnfjxcPKL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51HQivJd49L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/611khpTHw1L._SL1500_.jpg",
//     productTitle:
//       "Bodywise 1% Salicylic Acid Body Wash 250ml | Paraben & SLS Free | Gentle Exfoliating Shower Gel | Prevents Body Acne, Bumpy Skin & Deep Cleanses Skin",
//     productPrice: 349,
//     rating: 4.5,
//   },
//   {
//     id: 263,
//     category: "healthandpersonalcare",
//     subCategory: "beautytoolsandaccessories",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51j7luOXk8L._SL1200_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61FnQSb8edL._SL1200_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/51QaMtyJs8L._SL1200_.jpg",
//     productTitle:
//       "Nivea Men Body Wash, Active Clean With Active Charcoal, Shower Gel For Body, Face & Hair, 250 ml",
//     productPrice: 178,
//     rating: 3.6,
//   },
//   {
//     id: 264,
//     category: "healthandpersonalcare",
//     subCategory: "beautytoolsandaccessories",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51VBkdl38+L._SY300_SX300_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81VXwjIG2wL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/919KTXgX5mL._SL1500_.jpg",
//     productTitle:
//       "SET WET Deodorant Spray Perfume Cool, Charm & Swag Avatar for men, 150ml (Pack of 3)",
//     productPrice: 250,
//     rating: 4.3,
//   },
//   {
//     id: 265,
//     category: "healthandpersonalcare",
//     subCategory: "beautytoolsandaccessories",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51l19NyctDL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71k3CskBq5L._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/41vAl-GZZ7L._SL1000_.jpg",
//     productTitle: "Nivea Deep Impact Freshess, Deodorant Roll On For Men, 50ml",
//     productPrice: 156,
//     rating: 3.8,
//   },
//   {
//     id: 266,
//     category: "healthandpersonalcare",
//     subCategory: "beautytoolsandaccessories",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61hOVmQZczL._SL1100_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61A44VIjYNL._SL1100_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61dqyv5+YbL._SL1100_.jpg",
//     productTitle:
//       "The Man Company Body Spray Combo Pack For Men, Active, Legend, Intense & Bold, Long-Lasting Fragrance, Everyday Use Deo, 150ml (Pack Of 4)",
//     productPrice: 398,
//     rating: 4.2,
//   },
//   {
//     id: 267,
//     category: "healthandpersonalcare",
//     subCategory: "beautytoolsandaccessories",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61VHzShxDnL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/6142+rqE2HL._SL1080_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61YTV6PGo8L._SL1080_.jpg",
//     productTitle:
//       "WOW Skin Science Shea Butter and Cocoa Butter Moisturizing Body Lotion, Deep Hydration, 400ml",
//     productPrice: 219,
//     rating: 4.3,
//   },
//   {
//     id: 268,
//     category: "healthandpersonalcare",
//     subCategory: "beautytoolsandaccessories",
//     productImage1:
//       "https://m.media-amazon.com/images/I/611+X0ZGdWL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71NAmvUlLZL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71NBNNUpa5L._SL1500_.jpg",
//     productTitle:
//       "Minimalist Sunscreen SPF 50 Lightweight with Multi-Vitamins | No White Cast | Broad Spectrum PA ++++ | For Women & Men | 50g",
//     productPrice: 379,
//     rating: 4.1,
//   },
//   {
//     id: 269,
//     category: "healthandpersonalcare",
//     subCategory: "beautytoolsandaccessories",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81tJ8vAVc+L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71YcMXwM7JL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81Tb8W2tL9L._SL1500_.jpg",
//     productTitle:
//       "Amazon Brand - Solimo Makeup Removal Wipes - 30 wipes/pack (Pack of 4)",
//     productPrice: 147,
//     rating: 4.6,
//   },
//   {
//     id: 270,
//     category: "healthandpersonalcare",
//     subCategory: "beautytoolsandaccessories",
//     productImage1:
//       "https://m.media-amazon.com/images/I/412EhMfsLiL._SX300_SY300_QL70_FMwebp_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/612AxVSsehL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61hzV9+HKFL._SL1000_.jpg",
//     productTitle:
//       "Godrej Cinthol Cool Talcum Powder (300g) | menthol + active Deo fragrance",
//     productPrice: 160,
//     rating: 3.6,
//   },
//   {
//     id: 271,
//     category: "healthandpersonalcare",
//     subCategory: "dietandnutrition",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71ts5KSgJAL._SX679_PIbundle-50,TopRight,0,0_AA679SH20_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81w9OeRvJvL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/819VJgLIAsL._SL1500_.jpg",
//     productTitle:
//       "Optimum Nutrition (ON) Gold Standard 100% Whey (5 lbs/2.27 kg)(Double Rich Chocolate) Protein Powder Primary Source Isolate,For Men and Women",
//     productPrice: 6884,
//     rating: 4.3,
//   },
//   {
//     id: 272,
//     category: "healthandpersonalcare",
//     subCategory: "dietandnutrition",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61oeAFa+oLL._SL1200_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61OrM8+ShQL._SL1200_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/615IOf6poKL._SL1200_.jpg",
//     productTitle:
//       "Bigmuscles Nutrition Premium Gold Whey 1Kg | Isolate Whey Protein Blend [Belgian Chocolate] | USA FDA REGD. BRAND | 25g Protein Per Serving | 5.5g BCAA",
//     productPrice: 1599,
//     rating: 4.2,
//   },
//   {
//     id: 273,
//     category: "healthandpersonalcare",
//     subCategory: "dietandnutrition",
//     productImage1:
//       "https://m.media-amazon.com/images/I/518YtltCzzL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71VRrFijKEL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61pBBzhpB2L._SL1000_.jpg",
//     productTitle:
//       "AS-IT-IS ATOM Whey Protein 1kg with Digestive Enzymes | USA Labdoor Certified for Accuracy & Purity | Double Rich Chocolate flavor | 27g protein | 5.7g BCAA",
//     productPrice: 1775,
//     rating: 4.3,
//   },
//   {
//     id: 274,
//     category: "healthandpersonalcare",
//     subCategory: "dietandnutrition",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51wgOEjydJL._SX300_SY300_QL70_FMwebp_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81qoc6ahKxL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81E4ybKJYPL._SL1500_.jpg",
//     productTitle:
//       "Dabur Chyawanprash – 950gm, 2X/3X Immunity, helps build Strength and for Stamina",
//     productPrice: 339,
//     rating: 3.5,
//   },
//   {
//     id: 275,
//     category: "healthandpersonalcare",
//     subCategory: "dietandnutrition",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61Ry7BdkLeL._SL1001_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61hGzSniZeL._SL1001_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/611PEmuG6kL._SL1001_.jpg",
//     productTitle:
//       "Vansaar Karela & Jamun Juice-1L| Blood sugar level management | Suitable for diabetes & prediabetes care",
//     productPrice: 234,
//     rating: 3.9,
//   },
//   {
//     id: 276,
//     category: "healthandpersonalcare",
//     subCategory: "dietandnutrition",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61J9gXM+qFL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61bM4xjeghL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71p5UREl9UL._SL1500_.jpg",
//     productTitle:
//       "Zandu Pancharishta 650ml, Ayurvedic Tonic, Relief from disgetive problems like Acidity, Constipation and Gas, boosts digestive immunity",
//     productPrice: 168,
//     rating: 4.9,
//   },
//   {
//     id: 277,
//     category: "healthandpersonalcare",
//     subCategory: "dietandnutrition",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61ihHoIwk3L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/714VYDDSpWL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81bIhBPub7L._SL1500_.jpg",
//     productTitle:
//       "Dabur GlucoPlus-C Instant Energy Glucose Juicy & Tasty Lemon Flavour - 400g Jar | Glucose Replenishes Energy | 25% more Glucose in every sip| Vitamin C helps Boosts Immunity | Calcium Supports Bone Health",
//     productPrice: 113,
//     rating: 3.9,
//   },
//   {
//     id: 278,
//     category: "healthandpersonalcare",
//     subCategory: "dietandnutrition",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61kiF5vokcL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/612C8PygtWL._SL1200_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61+eEH2JtnL._SL1200_.jpg",
//     productTitle:
//       "GNC Triple Strength Fish Oil Omega 3 Capsules for Men & Women | 900mg EPA & DHA | Improves Memory | Protects Vision | No Fishy Aftertaste | Supports Family Health | USA Formulated",
//     productPrice: 957,
//     rating: 4.1,
//   },
//   {
//     id: 279,
//     category: "healthandpersonalcare",
//     subCategory: "dietandnutrition",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61HGDnffOML._SL1080_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61lGtGzvpSL._SL1080_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61iPe8uvXhL._SL1080_.jpg",
//     productTitle:
//       "Pure Nutrition Naturals Zinc ZMA Supplement 800mg with Magnesium + Vitamin B6 for Men & Women to Boost Immunity & Support Muscle Strength - 60 Veg Tablets",
//     productPrice: 552,
//     rating: 3.8,
//   },
//   {
//     id: 280,
//     category: "healthandpersonalcare",
//     subCategory: "dietandnutrition",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71s0tJ-iLtL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/718Ww8YJn4L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81O9zL7q+YL._SL1500_.jpg",
//     productTitle:
//       "Complan Nutrition and Health Drink Royale Chocolate, 1kg Refill Pack with power of 100% Milk Protein and contrains 34 Vital Nutrients",
//     productPrice: 498,
//     rating: 3.2,
//   },
//   {
//     id: 281,
//     category: "healthandpersonalcare",
//     subCategory: "dietandnutrition",
//     productImage1:
//       "https://m.media-amazon.com/images/I/716vVMF8QIL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81rz1qekNBL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81BQeWwvghL._SL1500_.jpg",
//     productTitle: "Sugar Free Green 100% Natural Sweetener - 400 g, Pouch",
//     productPrice: 280,
//     rating: 4.5,
//   },
//   {
//     id: 282,
//     category: "healthandpersonalcare",
//     subCategory: "dietandnutrition",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81Ie0ch4tjL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81vZyAyxbNL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81gNRadGmVL._SL1500_.jpg",
//     productTitle:
//       "Dabur Shilajit Gold - 20 Capsules | 100% Ayurvedic Capsules for Strength , Stamina and Power | Premium Vitality Ayurvedic Supplement | For Men",
//     productPrice: 370,
//     rating: 4.5,
//   },
//   {
//     id: 283,
//     category: "healthandpersonalcare",
//     subCategory: "dietandnutrition",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61O0Lpv4-PL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/717N21pkaXL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61N989qLRxL._SL1500_.jpg",
//     productTitle:
//       "MuscleBlaze Creatine Monohydrate, Labdoor USA Certified Creatine (Unflavoured, 100 g / 0.22 lb, 33 Servings)",
//     productPrice: 549,
//     rating: 4.5,
//   },
//   {
//     id: 284,
//     category: "healthandpersonalcare",
//     subCategory: "dietandnutrition",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81OOWp8s9aL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81jL0EGMmfL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71pS2AoqeKL._SL1500_.jpg",
//     productTitle:
//       "Man Matters Biotin Hair Gummies | 60 Days Pack | With Biotin, Vitamin A, C, E, Zinc & DHT Blocker | Added Sugar | Keeps Hair Healthy & Strong | Strawberry Flavored |100% Vegetarian | 60 Gummies",
//     productPrice: 799,
//     rating: 4.3,
//   },
//   {
//     id: 285,
//     category: "healthandpersonalcare",
//     subCategory: "dietandnutrition",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61mfzMeWJFL._SL1080_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51bpYzMGwCL._SL1080_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61JvNifpTfL._SL1080_.jpg",
//     productTitle:
//       "PLIX - THE PLANT FIX Apple Cider Vinegar 15 Effervescent Tablet with mother for weight loss and easy digestion, vitamin B6 & B12, Pack of 4 (Apple), 100% vegan, Easy to carry & consume",
//     productPrice: 1199,
//     rating: 4.2,
//   },
//   {
//     id: 286,
//     category: "healthandpersonalcare",
//     subCategory: "personalcareappliances",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51FGbb3EbgL._SL1227_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61+mzp99RvL._SL1227_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71ldqamJHFL._SL1227_.jpg",
//     productTitle: "Philips HP8100/46 Hair Dryer",
//     productPrice: 810,
//     rating: 4.5,
//   },
//   {
//     id: 287,
//     category: "healthandpersonalcare",
//     subCategory: "personalcareappliances",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51snVVoCDSL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61Tv5u+p54L._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61I2rb5qcbL._SL1000_.jpg",
//     productTitle:
//       "WAHL WCHS6-1724 Beard Straightening Brush; Advanced Ceramic Tourmaline Technology; Max Heat: 180 ℃; Lightweight & Portable",
//     productPrice: 1117,
//     rating: 4.2,
//   },
//   {
//     id: 288,
//     category: "healthandpersonalcare",
//     subCategory: "personalcareappliances",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71wc6OS21cL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/615OQTbcr1L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71A71qqnJkL._SL1500_.jpg",
//     productTitle:
//       "Oral B Cross Action Battery Powered Electric Toothbrush for adults, Pack of 1",
//     productPrice: 505,
//     rating: 4.6,
//   },
//   {
//     id: 289,
//     category: "healthandpersonalcare",
//     subCategory: "personalcareappliances",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61nOMPBrdTL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61RrZ7HlmkL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71mIssJ1X4L._SL1500_.jpg",
//     productTitle:
//       "Gillette Fusion Proglide 4-in-1 Styler for Trimming | Shaving | Beard Edging | Body Hair Trimming",
//     productPrice: 729,
//     rating: 4.7,
//   },
//   {
//     id: 290,
//     category: "healthandpersonalcare",
//     subCategory: "personalcareappliances",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61jWimZTcSS._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61SS4WbWPdS._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61brzD0yGvS._SL1500_.jpg",
//     productTitle:
//       "Philips BHS393/40 Straightener with SilkProtect Technology. Straighten, curl, Suitable for All Hair Types., Lavender",
//     productPrice: 1530,
//     rating: 4.3,
//   },
//   {
//     id: 291,
//     category: "healthandpersonalcare",
//     subCategory: "personalcareappliances",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71SgSJ+OGPL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/517NClMBX3L._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/51jFn1orLBL._SL1000_.jpg",
//     productTitle:
//       "Syska HT900 Corded & Cordless Fully Waterproof Beard Trimmer with Fast Charging Battery Indicator 120 min run time - 40 length settings, Black",
//     productPrice: 949,
//     rating: 4.6,
//   },
//   {
//     id: 292,
//     category: "healthandpersonalcare",
//     subCategory: "personalcareappliances",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71-C3hIns9L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71dakrOUb+L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71jMgn2IsDL._SL1500_.jpg",
//     productTitle:
//       "Oraimo SmartShaver Premium Cordless Electric Shaver for men Built in pop-up Trimmer,Super Fast Charge 90 minutes Runtime with Digital Battery Indicator,3 Head 360° Rotary Shaver for Dry Shave",
//     productPrice: 869,
//     rating: 4.9,
//   },
//   {
//     id: 293,
//     category: "healthandpersonalcare",
//     subCategory: "personalcareappliances",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71UPUgwoCfL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71ZUvohhI2L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71HTOR119KL._SL1500_.jpg",
//     productTitle:
//       "AGARO Cosmic Max Sonic Toothbrush Black & Ultra Plus Portable Oral Irigator 300 ML Black, Combo",
//     productPrice: 4267,
//     rating: 4.3,
//   },
//   {
//     id: 294,
//     category: "healthandpersonalcare",
//     subCategory: "personalcareappliances",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61bIwAOiG4L._SX569_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71lJRRYfjdL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71UcJzVPAzL._SL1500_.jpg",
//     productTitle:
//       "Tash Hair Automatic Hair Curler Wireless Curling Iron Ceramic Rotating Cordless USB Rechargeable Timer LCD Digital Hair Curler Irons Adjustable Safe Temp. Hair Styler for Women's Hair(Champagne Dust)",
//     productPrice: 3499,
//     rating: 4.2,
//   },
//   {
//     id: 295,
//     category: "healthandpersonalcare",
//     subCategory: "personalcareappliances",
//     productImage1:
//       "https://m.media-amazon.com/images/I/614s75abpYL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71koLJXvdxL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71Lil0AXWpL._SL1500_.jpg",
//     productTitle:
//       "AGARO Rejoice Foot, Calf and Leg Massager with Heat and Vibration, 80W, 4 Motors, Rolling & Kneading Functions for Pain Relief & Improving Blood Circulation, Corded Electric, Grey",
//     productPrice: 13499,
//     rating: 4.3,
//   },
//   {
//     id: 296,
//     category: "healthandpersonalcare",
//     subCategory: "personalcareappliances",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81khmKPWM4L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81wGUNcvR9L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/6137C8G1XaL._SL1500_.jpg",
//     productTitle: "Philips BT3102/15 Cordless Beard Trimmer (Black and Grey)",
//     productPrice: 1280,
//     rating: 3.9,
//   },
//   {
//     id: 297,
//     category: "healthandpersonalcare",
//     subCategory: "personalcareappliances",
//     productImage1: "https://m.media-amazon.com/images/I/41vsAb-RMpL.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51E9jgHJpfL._SL1000_.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/514tg8+mpdL.jpg",
//     productTitle:
//       "Aariv All In One Personal Health Care Ear Nose Neck Eyebrow Trimmer with Built-In LED Light Touches Hair Removal Shaver Clipper for Men and Women (Multicolour)",
//     productPrice: 287,
//     rating: 4.2,
//   },
//   {
//     id: 298,
//     category: "healthandpersonalcare",
//     subCategory: "personalcareappliances",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61krCpqKq-L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71x-pjbd4VL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71x0cOm7pbL._SL1500_.jpg",
//     productTitle:
//       "Philips Sonicare ProtectiveClean 4300 Electric Toothbrush with Sonic Technology, Up to 7x Plaque Removal, Built-in Pressure Sensor, Dual-Intensity, Brush Sync Feature, 2-minute Timer. HX6807/24",
//     productPrice: 3609,
//     rating: 3.6,
//   },
//   {
//     id: 299,
//     category: "healthandpersonalcare",
//     subCategory: "personalcareappliances",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51Jji8yi5tL._SL1421_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81M9MjRwRFL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81VgkZxXt9L._SL1500_.jpg",
//     productTitle:
//       "Panasonic Hair Dryer, Eh-Nd65-K62B, For Shinier, Healthier Moisture-Rich Hair (Black), 2000 Watts",
//     productPrice: 3016,
//     rating: 4.1,
//   },
//   {
//     id: 300,
//     category: "healthandpersonalcare",
//     subCategory: "personalcareappliances",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71R01aiOnRL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81BiFKk6WML._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81Rd8GK3LKL._SL1500_.jpg",
//     productTitle:
//       "Havells Wide Plate Hair Straightener - HS4121 (Red_Free Size)",
//     productPrice: 1299,
//     rating: 4.6,
//   },
//   {
//     id: 301,
//     category: "sports",
//     subCategory: "sports",
//     productImage1:
//       "https://m.media-amazon.com/images/I/6165ra+gxhL._SL1100_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61DRx-I7UmL._SL1100_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/51UGkCjpCPL._SL1100_.jpg",
//     productTitle:
//       "Urban Terrain Mutant 27.5 Black, Steel Mountain Cycle with 21 Shimano Gear with Mudguard Accessories, Cycling Event, Diet Plan and Ride Tracking App by cultsport(17 Inches Frame, Ideal for Unisex) ",
//     productPrice: 10999,
//     rating: 4.5,
//   },
//   {
//     id: 302,
//     category: "sports",
//     subCategory: "sports",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71Qd9DaJYdL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/813eM6+1eQL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81V0sHCdysL._SL1500_.jpg",
//     productTitle:
//       "Leader Gladiator 26t Mountain Bike Multispeed (21 Speed) Gear Cycle | Free Pan India Installation| Front Suspension and Disc Brake (26T, SEA Green Black)",
//     productPrice: 8999,
//     rating: 4.2,
//   },
//   {
//     id: 303,
//     category: "sports",
//     subCategory: "sports",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61jZySbdqIL._SL1100_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61r3nL0bavL._SL1100_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61jZySbdqIL._SL1100_.jpg",
//     productTitle:
//       "Urban Terrain UT6000A29, Alloy,MTB Mountain Cycle with 21 Shimano Gear, PAN India Installation and cultsport App Tracking (Frame: 17 Inches, Ideal for Unisex)",
//     productPrice: 13499,
//     rating: 4.5,
//   },
//   {
//     id: 304,
//     category: "sports",
//     subCategory: "sports",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61Eq88ACOkL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61W0AcUSwEL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71-AjdmA01L._SL1500_.jpg",
//     productTitle:
//       "Lifelong PVC Hex Dumbbells Pack of 2 for Home Gym Equipment Fitness Barbell|Gym Exercise|Home Workout, Gym Dumbbells|Dumbbells Weights for Men & Women (6 Months Warranty)",
//     productPrice: 138,
//     rating: 3.6,
//   },
//   {
//     id: 305,
//     category: "sports",
//     subCategory: "sports",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51aHGGMCgnL._SX569_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61at0rOEt+L._SL1207_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/611FhwwzCoL._SL1200_.jpg",
//     productTitle:
//       "FitBox Sports Intruder 20 Kg Adjustable PVC Dumbbells Weights With Dumbbells Rods For Home Gym & Strength Training, 10 Kg X 2 (Black)",
//     productPrice: 725,
//     rating: 4.1,
//   },
//   {
//     id: 306,
//     category: "sports",
//     subCategory: "sports",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71kxwTc-SrL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71nsirTohOL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81Tl3R13gWL._SL1500_.jpg",
//     productTitle:
//       "GAMMA FITNESS Power Squat Rack with LATS Pull Down PR-40 in 2.5X2.5 inches Commercial Pipe",
//     productPrice: 25649,
//     rating: 3.9,
//   },
//   {
//     id: 307,
//     category: "sports",
//     subCategory: "sports",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61-X6z9Ms4S._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/719CBc5dJkL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61znQGyO+fL._SL1500_.jpg",
//     productTitle:
//       "Lifelong FitPro LLTM09 (2.5 HP Peak) Manual Incline Motorized Treadmill for Home with 12 preset Workouts, Max Speed 12km/hr. (Free Installation Assistance) Max. User Weight 100Kg, 1 Year Warranty",
//     productPrice: 17499,
//     rating: 4.1,
//   },
//   {
//     id: 308,
//     category: "sports",
//     subCategory: "sports",
//     productImage1:
//       "https://m.media-amazon.com/images/I/612KznDgxkL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71BE7ki-J+L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71agyoaDffL._SL1500_.jpg",
//     productTitle:
//       "beatXP Vortex Energize 1M Air Bike Exercise Cycle for Workout with Adjustable Cushioned Seat | Moving Handles | Full Body Workout Gym Fitness Cycle Machine With 6 Months Warranty (Black)",
//     productPrice: 14999,
//     rating: 4.3,
//   },
//   {
//     id: 309,
//     category: "sports",
//     subCategory: "sports",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51Y4EUvfT9L._SL1352_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61ABD9Bq-nL._SL1001_.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/51+3woWQnoL.jpg",
//     productTitle:
//       "Healthex Pedal Exerciser Cycle Bike for Home Gym LCD Counter Foldable Exercise Bike Indoor Fitness Resistance Home Use Mini Bike (Black/Silver)",
//     productPrice: 1496,
//     rating: 3.8,
//   },
//   {
//     id: 310,
//     category: "sports",
//     subCategory: "sports",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71snlkNDRBL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81fm7pRd4hL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81VPuF60jeL._SL1500_.jpg",
//     productTitle:
//       "Yonex Nanoray Light 18i Graphite Badminton Racquet with free Full Cover (77 grams, 30 lbs Tension, Black)",
//     productPrice: 1899,
//     rating: 3.9,
//   },
//   {
//     id: 311,
//     category: "sports",
//     subCategory: "sports",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51AGpTLkUpL._SL1280_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/7154LA4-VHL._SL1280_.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/41DqhisTdJL.jpg",
//     productTitle:
//       "Star House Cricket Kit Bag with Special Bat Holder On The Side, Duffle Kit Bag, Backpack, Full Size with Shoulder Straps and Handle for Player (Olive Green)",
//     productPrice: 705,
//     rating: 4.1,
//   },
//   {
//     id: 312,
//     category: "sports",
//     subCategory: "sports",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61RpRYFb2wL._SL1100_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61dYsS8wJkL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81xLfNXE3LL._SL1500_.jpg",
//     productTitle:
//       "Nivia Storm Football | Rubberized Moulded | Suitable for Hard Ground Without Grass | Training Ball | Soccer Ball | for Men/Women | Football Size - 5 (White",
//     productPrice: 343,
//     rating: 4.1,
//   },
//   {
//     id: 313,
//     category: "sports",
//     subCategory: "sports",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71GtTx+NJJL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81IYVrvoeBL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81aRcRimYQL._SL1500_.jpg",
//     productTitle:
//       "SLOVIC Anti-Fog Swimming Goggle | Universal Fit | Leak-Proof | Easy to Adjust Push-Button Straps | Padded Frames & Anti-Shatter Wide Field Lens | UV-Protection",
//     productPrice: 698,
//     rating: 4.3,
//   },
//   {
//     id: 314,
//     category: "sports",
//     subCategory: "sports",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61KLcX0KCbL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71MivRX0BCL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71YeR-NH+aL._SL1500_.jpg",
//     productTitle:
//       "Strauss Portable Waterproof Camping Tent, 2 Persons (Multi Color)",
//     productPrice: 1066,
//     rating: 4.3,
//   },
//   {
//     id: 315,
//     category: "sports",
//     subCategory: "sports",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71ohtjENEkL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71v5EwRVJ3L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71IaOrvBTFL._SL1500_.jpg",
//     productTitle: "Yonex Mavis 350 Nylon Shuttlecock",
//     productPrice: 1039,
//     rating: 4.5,
//   },
//   {
//     id: 316,
//     category: "sports",
//     subCategory: "cricket",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71z8b0IJFML._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81681kH5ULL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71rSxalbsXL._SL1500_.jpg",
//     productTitle:
//       "Boldfit Turf Bat Cricket for Adults Plastic Tennis Cricket Bat for Mens Heavy Plastic Cricket Bats with Grip for Gully Cricket, Tournament Match Standard Full Size Tennis Ball Bat for Cricket - Black",
//     productPrice: 447,
//     rating: 4.3,
//   },
//   {
//     id: 317,
//     category: "sports",
//     subCategory: "cricket",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51xGmMr9BAL._SL1200_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/41nb3O9QD2L._SL1200_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/411qaAxb3yL._SL1200_.jpg",
//     productTitle:
//       "Florence Full Size Popular Cricket Bat for All Hard and Soft Tennis Bat Cricket Bat Multicolor (Hitman bat with Ball)",
//     productPrice: 639,
//     rating: 3.9,
//   },
//   {
//     id: 318,
//     category: "sports",
//     subCategory: "cricket",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51LpUcVzW-L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81jGDN9YudL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/7154SMcNSrL._SL1500_.jpg",
//     productTitle:
//       "GM Icon 101 Kashmir Willow Cricket Bat for Mens, Size - Mens",
//     productPrice: 3895,
//     rating: 4.5,
//   },
//   {
//     id: 319,
//     category: "sports",
//     subCategory: "cricket",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51nHQqvWnEL._SL1200_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51QFBF79DGL._SL1200_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/51Fed5rj6EL._SL1200_.jpg",
//     productTitle:
//       "Whitedot Dot 2.1 PU Cricket Batting Pad, Size (Boys/Small LH), Pack of (1Pair), White",
//     productPrice: 1895,
//     rating: 3.9,
//   },
//   {
//     id: 320,
//     category: "sports",
//     subCategory: "cricket",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51vIFTVQusL._SL1080_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51W2fInfXuL._SL1080_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61bofA1aDLL._SL1080_.jpg",
//     productTitle:
//       "SG Adult Foam, Polyurethane and Fabric Super Test RH Thigh Pad",
//     productPrice: 749,
//     rating: 4.5,
//   },
//   {
//     id: 321,
//     category: "sports",
//     subCategory: "cricket",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61oubIr9IcL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61wojdR3boL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61antGzIEBL._SL1500_.jpg",
//     productTitle: "SG Smart Cricket Helmet",
//     productPrice: 1399,
//     rating: 4.2,
//   },
//   {
//     id: 322,
//     category: "sports",
//     subCategory: "cricket",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61AI-928R7L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51yl+wQPaVL._SL1024_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61rIliTJ8cL._SL1500_.jpg",
//     productTitle:
//       "SG R.P.M. Sports Economy Kashmir Willow Cricket Kit (Assorted, Size - 6)",
//     productPrice: 6489,
//     rating: 4.3,
//   },
//   {
//     id: 323,
//     category: "sports",
//     subCategory: "cricket",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81ky9jDeazL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81X-4m3jwmL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81uRrSgM9GL._SL1500_.jpg",
//     productTitle:
//       "Boldfit Tennis Ball Cricket Tennis Ball Light Tennis Ball for Cricket Tournament, Street Match Cricket Ball Tennis for Lawn Cricket Soft Tennis Balls for Playing Pacer Cricket Ball - Green Pack of 3",
//     productPrice: 249,
//     rating: 4.5,
//   },
//   {
//     id: 324,
//     category: "sports",
//     subCategory: "cricket",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71hM2clzFrL._SL1068_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71HMwwGpShL._SL1066_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61Poui8ydhL._SL1312_.jpg",
//     productTitle: "SG Bouncer Leather Ball (Red) , Standard Size 1pc",
//     productPrice: 599,
//     rating: 3.9,
//   },
//   {
//     id: 325,
//     category: "sports",
//     subCategory: "cricket",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71rUVHqXYiL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61MCAgmyHSL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61R+g7tl8sL._SL1500_.jpg",
//     productTitle: "SG Cricket ACE Duffle Kit Bag",
//     productPrice: 849,
//     rating: 4.5,
//   },
//   {
//     id: 326,
//     category: "sports",
//     subCategory: "cricket",
//     productImage1: "https://m.media-amazon.com/images/I/51E6YSIuoDL.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/519n9V27OdL._UL1003_.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/41F0yn1FutL.jpg",
//     productTitle:
//       "India Cricket Team Jersey MS Dhoni 7 2023/2024 for Kids & Boys",
//     productPrice: 259,
//     rating: 3.9,
//   },
//   {
//     id: 327,
//     category: "sports",
//     subCategory: "cricket",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71A2nscIUgL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/41mcww-araL._SL1024_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81hmC+WnQ-L._SL1500_.jpg",
//     productTitle: "SG Shoe for Cricket Men Scorer 5.0",
//     productPrice: 1499,
//     rating: 4.2,
//   },
//   {
//     id: 328,
//     category: "sports",
//     subCategory: "cricket",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71RYxEGztEL._SL1215_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/91dxepsi7YL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71BPax-uzbL._SL1500_.jpg",
//     productTitle:
//       "LIVOX® Super-5 Cricket Bat Grips with 1 Wooden Grip Cone Ultra Tacky (Pack of 6)",
//     productPrice: 397,
//     rating: 4.2,
//   },
//   {
//     id: 329,
//     category: "sports",
//     subCategory: "cricket",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61JTIcfnGAL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61Yl+nDJCLL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71h-GBAnkwL._SL1500_.jpg",
//     productTitle:
//       "GOLS Cricket Bat Double Side Knocking Wooden Mallet (Hammer), Natural Colour Pack of 1",
//     productPrice: 180,
//     rating: 4.1,
//   },
//   {
//     id: 330,
//     category: "sports",
//     subCategory: "cricket",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61IrpdKHxPL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61Jkm3ZgulL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61KBdQDhLBL._SL1500_.jpg",
//     productTitle: "The RoboArm® Advanced- Worlds Fastest Ball Thrower",
//     productPrice: 999,
//     rating: 4.5,
//   },
//   {
//     id: 331,
//     category: "sports",
//     subCategory: "badminton",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81G8p7bkdCL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71B7QbZ9wwL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81lgujNK8hL._SL1500_.jpg",
//     productTitle:
//       "YONEX Graphite Badminton Racquet, Muscle Power 22LT Black Blue",
//     productPrice: 2390,
//     rating: 4.7,
//   },
//   {
//     id: 332,
//     category: "sports",
//     subCategory: "badminton",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81EfnOXmVGL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81pfqxpBa-L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71NhtVVkrTL._SL1500_.jpg",
//     productTitle:
//       "Young Trigger 551 (Power Head, High Durable) Set of 2 Strung Badminton Racket with 2 Free Full Cover (Red Black)",
//     productPrice: 799,
//     rating: 4.2,
//   },
//   {
//     id: 333,
//     category: "sports",
//     subCategory: "badminton",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71A+R1S78HL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81D7i0hB1RL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81+ZiWIys5L._SL1500_.jpg",
//     productTitle:
//       "YONEX ZR 100 Light Aluminium Badminton Racquet with Full Cover (Black/Red) - Set of 2",
//     productPrice: 981,
//     rating: 4.2,
//   },
//   {
//     id: 334,
//     category: "sports",
//     subCategory: "badminton",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71Jq43IodUL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61MSkHxLWrL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61ETga4K+qL._SL1500_.jpg",
//     productTitle:
//       "FEROC 2 Pieces Aluminium Badminton Racket with 3 Pieces Feather Shuttles with Full-Cover Set ,Aluminum, Multicolor",
//     productPrice: 500,
//     rating: 4.1,
//   },
//   {
//     id: 335,
//     category: "sports",
//     subCategory: "badminton",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61buej4SpBL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71ISqDTsjUL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81cqxTJBx6L._SL1500_.jpg",
//     productTitle: "Li-Ning Future 9 Nylon Shuttlecock (Yellow, Pack of 6)",
//     productPrice: 899,
//     rating: 4.6,
//   },
//   {
//     id: 336,
//     category: "sports",
//     subCategory: "badminton",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61FGWTCmY5L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61rKAlT7sdL._SL1294_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71tViKQxZPL._SL1500_.jpg",
//     productTitle:
//       "AMIFIT Steller Gold Series Feather Shuttlecock, Pack of 10 (White)",
//     productPrice: 349,
//     rating: 3.8,
//   },
//   {
//     id: 337,
//     category: "sports",
//     subCategory: "badminton",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81wOE1YxV-L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71rt9dQA1LL._SL1414_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71YF0O6X3nL._SL1500_.jpg",
//     productTitle:
//       "KNK Double Shaft Iron Body Badminton Racket with Badminton Net One Piece Full Cover (3 Shuttle+ Badminton Net",
//     productPrice: 339,
//     rating: 4.7,
//   },
//   {
//     id: 338,
//     category: "sports",
//     subCategory: "badminton",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81TJhcQiXSL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81c1JC0vbgL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81P8gX761xL._SL1500_.jpg",
//     productTitle: "Yonex Badminton Bag SUNR 2215 BT5 Black Red",
//     productPrice: 563,
//     rating: 4.5,
//   },
//   {
//     id: 339,
//     category: "sports",
//     subCategory: "badminton",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71+yIpofJDL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61bQC2facuL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71TnMMNrkUL._SL1500_.jpg",
//     productTitle: "Li-Ning Panther Double Zipper Polyester Badminton Kit Bag",
//     productPrice: 999,
//     rating: 4.1,
//   },
//   {
//     id: 340,
//     category: "sports",
//     subCategory: "badminton",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81s5UOa+WbL._UL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81oIZXekQ1L._UL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/91CMLHBwaDL._UL1500_.jpg",
//     productTitle: "Nivia Appeal 2.0 Badminton Shoes for Mens",
//     productPrice: 1299,
//     rating: 4.2,
//   },
//   {
//     id: 341,
//     category: "sports",
//     subCategory: "badminton",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71p7ZObkrfL._UL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81DkBxXZQmL._UL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/819ykeaMDoL._UY500_.jpg",
//     productTitle:
//       "HUNDRED Raze Badminton Shoes (Non Marking) | Also Perfect for Squash, Table Tennis, Volleyball, Basketball & Indoor Sports | Lightweight & Durable | X-Cushion, Active Grip Sole, Toe Assist",
//     productPrice: 1599,
//     rating: 4.3,
//   },
//   {
//     id: 342,
//     category: "sports",
//     subCategory: "badminton",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81Lx45Xk7HL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81o6btdl2OL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71puQreP96L._SL1500_.jpg",
//     productTitle: "Raisco R716F Nylon Badminton Net (Blue)",
//     productPrice: 299,
//     rating: 3.5,
//   },
//   {
//     id: 343,
//     category: "sports",
//     subCategory: "badminton",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51DDXyaibBL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51-YkMa9bVL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61Um5+YL6vL._SL1500_.jpg",
//     productTitle: "Yonex ET 902 Synthetic Badminton Grip, 1 Pc",
//     productPrice: 49,
//     rating: 4.2,
//   },
//   {
//     id: 344,
//     category: "sports",
//     subCategory: "badminton",
//     productImage1:
//       "https://m.media-amazon.com/images/I/91a5wPUQjHL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/91CdYDItMKL._SL1500_.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/41cdX61vQgL.jpg",
//     productTitle:
//       "Yonex BG 80 Power Microfiber Badminton String (Bright Orange)",
//     productPrice: 775,
//     rating: 4.1,
//   },
//   {
//     id: 345,
//     category: "sports",
//     subCategory: "badminton",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51hGu1ykyhL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61uYFdIxwKL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61GAl1y6tIL._SL1500_.jpg",
//     productTitle: "Yonex Super GRAP AC 102Ex Rubber Badminton Grip, Assorted",
//     productPrice: 59,
//     rating: 4.1,
//   },
//   {
//     id: 346,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/718KlVXGfYL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61UQfR51zwL._SL1280_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61Pm9uT2xpL._SL1280_.jpg",
//     productTitle: "Cosco Hurricane Football - Size 5, White",
//     productPrice: 499,
//     rating: 4.3,
//   },
//   {
//     id: 347,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71LtOl9omfL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/718qdn1s+FL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61xK6gE+mGL._SL1500_.jpg",
//     productTitle: "Nivia Rabona Pro Football",
//     productPrice: 869,
//     rating: 4.2,
//   },
//   {
//     id: 348,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81oeArgYQrL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71Ro5UZZMrL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71Bt49WZuqL._SL1500_.jpg",
//     productTitle: "Nivia Home Play Football for Kids (1, Red)",
//     productPrice: 119,
//     rating: 4.1,
//   },
//   {
//     id: 349,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/914DJw-vD2L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81ZDhT+AxiL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/918MVXMhiPL._SL1500_.jpg",
//     productTitle: "Nivia Country Colour Rubber Moulded Football",
//     productPrice: 469,
//     rating: 4.7,
//   },
//   {
//     id: 350,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71OTsDRJRuL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81rBKhhWiSL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71wfTwV3YDL._SL1500_.jpg",
//     productTitle:
//       "Nivia Spinner Football (England) Machine Stitched/32 Panel/Ball for Hobby, Recreational, Training, Beginner/Soccer Ball/Football Size - 5 (Multicolour)",
//     productPrice: 362,
//     rating: 3.9,
//   },
//   {
//     id: 351,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/714K2hpueaL._SL1499_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/616iostT35L._SL1012_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/51dXOLuhGcL._SL1248_.jpg",
//     productTitle:
//       "SKY GOLD Premium Brazuca Polyurethane Football with Pump, Size 5, (Multicolour)",
//     productPrice: 599,
//     rating: 4.6,
//   },
//   {
//     id: 352,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71TxTQZ6RgL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61ZwH3AiweL._SL1100_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/519TTnwyM5L._SL1100_.jpg",
//     productTitle:
//       "Nivia Air Strike Football G/Keeper Gloves (Green) Size-Medium",
//     productPrice: 299,
//     rating: 4.1,
//   },
//   {
//     id: 353,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61FYtR4cDBL._SL1024_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61bCXpT+O2L._SL1024_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61fM2gQHrLL._SL1024_.jpg",
//     productTitle:
//       "Proberos® Goalkeeper Gloves for Football for Kids Teenagers, Practice Goalkeeper Synthetic Gloves, Give Splendid Protection and Comfort, Strong Grip Shockproof Non-Slip Goalkeeper Gloves for Youth(7#)",
//     productPrice: 869,
//     rating: 4.8,
//   },
//   {
//     id: 354,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/91cbws1Xp0L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81tHAW7Df3L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81EFEA06RuL._SL1500_.jpg",
//     productTitle:
//       "Nivia Ditmar Spider Goalkeeper Gloves for Men & Women, for Football, for Soccer, goalkeeping Glove, Goalkeeper Gloves with Grip, Football Hand Gloves, Goalkeeper Gloves, Football Hand Glove (Black) M",
//     productPrice: 689,
//     rating: 4.5,
//   },
//   {
//     id: 355,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51lEznzIAML._UL1440_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61c-VggVqzL._UL1440_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/51C58nVQwOL._UL1440_.jpg",
//     productTitle: "Nivia mens Airstrike Football Stud for Men Football Shoes",
//     productPrice: 714,
//     rating: 3.9,
//   },
//   {
//     id: 356,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81lT4MLDvjL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81BKagZZm0L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81jA-CbkQqL._SL1500_.jpg",
//     productTitle:
//       "Nivia Storm Football Shoe for Mens | TPU Sole with PVC Synthetic Leather Upper for Hard and Grassy Surfaces Suitable for Sports, Die Cut Soft Cushion, Light Weight Insole",
//     productPrice: 970,
//     rating: 4.6,
//   },
//   {
//     id: 356,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81lT4MLDvjL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81BKagZZm0L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81jA-CbkQqL._SL1500_.jpg",
//     productTitle:
//       "Nivia Storm Football Shoe for Mens | TPU Sole with PVC Synthetic Leather Upper for Hard and Grassy Surfaces Suitable for Sports, Die Cut Soft Cushion, Light Weight Insole",
//     productPrice: 970,
//     rating: 4.6,
//   },
//   {
//     id: 356,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81knlKQE4gL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81re-LX0tSL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81Bc3dvjjTL._SL1500_.jpg",
//     productTitle:
//       "Nivia Oslar Blade 2.0 Football Shoes for Men/Sports and Athletic Footwear with Upper Synthetic/Comfortable Football Shoes",
//     productPrice: 1944,
//     rating: 4.5,
//   },
//   {
//     id: 358,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/812+IS4rYgL._UL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81SyIra4J7L._UL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/91e9aOg8XSL._UL1500_.jpg",
//     productTitle: "Puma Men's Regular Fit Active Base Layer Shirt",
//     productPrice: 849,
//     rating: 4.5,
//   },
//   {
//     id: 359,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71gnpfwYL2L._UL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/91GOTN48roL._UL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61vjlyEayZL._UL1500_.jpg",
//     productTitle: "Puma Men's Regular Fit Shirt",
//     productPrice: 349,
//     rating: 4.1,
//   },
//   {
//     id: 360,
//     category: "sports",
//     subCategory: "football",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81Yvpli06GL._UL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51PabECa27L._UL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/91DeMY4MPoL._UL1500_.jpg",
//     productTitle: "Adidas Men's Regular Fit T-Shirt",
//     productPrice: 1649,
//     rating: 4.7,
//   },
//   {
//     id: 361,
//     category: "sports",
//     subCategory: "yoga",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81feGML0NAL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81681kH5ULL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81B2g8wGAYL._SL1500_.jpg",
//     productTitle:
//       "Boldfit Yoga Mats For Women yoga mat for men Exercise mat for home workout yoga mat for women gym mat Anti Slip Yoga mat Workout mat Yoga Mat For Kids Yoga mate gym mats for workout at home",
//     productPrice: 499,
//     rating: 4.1,
//   },
//   {
//     id: 362,
//     category: "sports",
//     subCategory: "yoga",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61U2Kw3wnFL._SL1200_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61Og-JeUnPL._SL1200_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61AqmvEhSnL._SL1200_.jpg",
//     productTitle:
//       "Boldfit Yoga Mat for Women and Men with Cover Bag TPE Material Extra Thick Exercise Yoga Mat for Men for Workout, Yoga, Fitness, Exercise Mat Anti Slip Mat, Yoga Mat Gym Mat",
//     productPrice: 1449,
//     rating: 4.5,
//   },
//   {
//     id: 363,
//     category: "sports",
//     subCategory: "yoga",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61qJ1AguXAL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51ev0RFI3kL._SL1080_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61VDT7caXYL._SL1080_.jpg",
//     productTitle:
//       "Viyom TPE alignment 6mm black yoga mat with sleek carry strap (Extra Thick Extra Long Extra Wide Exercise floor mat for gym, Workout, Fitness, Yoga and pilates)",
//     productPrice: 1679,
//     rating: 4.3,
//   },
//   {
//     id: 364,
//     category: "sports",
//     subCategory: "yoga",
//     productImage1:
//       "https://m.media-amazon.com/images/I/815LBRhttYL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/7114CnT01uL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61jE3zbXy2L._SL1500_.jpg",
//     productTitle:
//       "Amazon Basics 13mm Extra Thick NBR Yoga and Exercise Mat with Carrying Strap, Pink",
//     productPrice: 1049,
//     rating: 4.3,
//   },
//   {
//     id: 365,
//     category: "sports",
//     subCategory: "yoga",
//     productImage1:
//       "https://m.media-amazon.com/images/I/91BoPULW7iL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/9162RLL1HXL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81WD1QEUaCL._SL1500_.jpg",
//     productTitle: "Amazon Basics Foam Yoga Blocks, Set of 2",
//     productPrice: 569,
//     rating: 3.9,
//   },
//   {
//     id: 366,
//     category: "sports",
//     subCategory: "yoga",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81u66t6SZrS._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81as9sWyk8S._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81CSjKw9zfS._SL1500_.jpg",
//     productTitle:
//       "The Yogis™ Wooden Yoga Blocks [ Set of - 2 Piece ] { Free - Yoga Belt } Size - 9×5×3 Inch",
//     productPrice: 1049,
//     rating: 4.1,
//   },
//   {
//     id: 367,
//     category: "sports",
//     subCategory: "yoga",
//     productImage1: "https://m.media-amazon.com/images/I/41WzT9BIecL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/41YsxKt+Z7L.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/41M3wLBhiHL.jpg",
//     productTitle:
//       "ROSEFINCH Bamboo Stick for Walking Cane, Balance, Strength Training & Stretching 6ft Wooden Yoga Stick for Exercise, Gym Stick Fitness and Physical Rehabilitation - Pack of 1, Multi.",
//     productPrice: 433,
//     rating: 3.7,
//   },
//   {
//     id: 368,
//     category: "sports",
//     subCategory: "yoga",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61nBCBzgc9L._SX569_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/91+UlCiVZML._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71vUy0g14oL._SL1500_.jpg",
//     productTitle:
//       "Boldfit Resistance Bands Mini Loop Hip Band/Toning Exercise Band for Gym Booty Belt/Latex Band/Thera Band/Theraband for Fitness, Multicolor",
//     productPrice: 249,
//     rating: 3.9,
//   },
//   {
//     id: 369,
//     category: "sports",
//     subCategory: "yoga",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61c9xw4sbkL._SL1024_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61gNy+6S9NL._SL1024_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/51FXFoInKAL._SL1024_.jpg",
//     productTitle:
//       "Proberos® Yoga Belt for Women Men, 5 Loops Yoga Strap for Stretching, Yoga Bands for Yoga Exercise Fitness Rehabilitation Ligament Ankle Joint Correction Hemiplegia Training",
//     productPrice: 399,
//     rating: 4.1,
//   },
//   {
//     id: 370,
//     category: "sports",
//     subCategory: "yoga",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61Y8UzB-zJL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61xgHU00BPL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61DFPuGyb4L._SL1500_.jpg",
//     productTitle:
//       "NETTIE Cotton Carry Bag with Strap and Drawstring for Yoga Mat- Big Size",
//     productPrice: 198,
//     rating: 3.9,
//   },
//   {
//     id: 371,
//     category: "sports",
//     subCategory: "yoga",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81fMEvQbmFL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/913N1qAOjYL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/91l6K3YMYqL._SL1500_.jpg",
//     productTitle: "Yogpro Yoga MAT Bag Faux Leather (Brown, 4-8 MM)",
//     productPrice: 499,
//     rating: 4.2,
//   },
//   {
//     id: 372,
//     category: "sports",
//     subCategory: "yoga",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71OLj0qbSrL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/7196ll+NgXL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61p7G2+ZVFL._SL1500_.jpg",
//     productTitle:
//       "Strauss Grid Foam & Deep Tissue Foam Roller For Deep Tissue Massage|Foam Roller for Exercise, Fitness, Back Pain, Deep Tissue Massage, and Physiotherapy, 33 to 45 cm, (Multicolor)",
//     productPrice: 763,
//     rating: 4.5,
//   },
//   {
//     id: 373,
//     category: "sports",
//     subCategory: "yoga",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61jESJsvVPL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61WB7l6giJL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61ouhRy-DeL._SL1500_.jpg",
//     productTitle:
//       "Wiselife Yoga Wheel For Men & Women | Big Circle Wheel For Abs, Home Training, Deep Tissue Massage, Back Pain, Stretching, Back Bends, Body Posture, Sweat Resistant | 13 x 6 inch (Teal + Orange)",
//     productPrice: 1495,
//     rating: 4.1,
//   },
//   {
//     id: 374,
//     category: "sports",
//     subCategory: "yoga",
//     productImage1: "https://m.media-amazon.com/images/I/41zxsYaHOgL.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61X50JMzitL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61ZqYRoKUML._SL1000_.jpg",
//     productTitle:
//       "FreshDcart Super soft Meditation Mask Black Eye Vision & Smooth Travel Band for Sleep Eye in Day/Night for Men Women Boys Girls (FDC-Black)",
//     productPrice: 175,
//     rating: 4.1,
//   },
//   {
//     id: 375,
//     category: "sports",
//     subCategory: "yoga",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81M3FIToqvL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71jF8g8JOSL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/8139qAPArsL._SL1500_.jpg",
//     productTitle:
//       "Yes4All Aqua Weight Bags for Full Body Training, Challenge Weight Bag - Substitute for Sandbag",
//     productPrice: 8736,
//     rating: 4.8,
//   },
//   {
//     id: 376,
//     category: "sports",
//     subCategory: "campingandhiking",
//     productImage1: "https://m.media-amazon.com/images/I/513s0EnQg7L.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/51bmWW6VcwL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/51hUqk9SCOL.jpg",
//     productTitle: "TriPole Walker 65 Litre Internal Frame Rucksack",
//     productPrice: 2649,
//     rating: 4.1,
//   },
//   {
//     id: 377,
//     category: "sports",
//     subCategory: "campingandhiking",
//     productImage1: "https://m.media-amazon.com/images/I/51h+r85syYL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/61Kgg2bc4CL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/61SuSV5d62L.jpg",
//     productTitle:
//       "ADVENTREX Rapid 65 Litre Front Opening Rucksack for Travelling and Hiking",
//     productPrice: 1499,
//     rating: 4.1,
//   },
//   {
//     id: 378,
//     category: "sports",
//     subCategory: "campingandhiking",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71NiIIfijlL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61r4Td2K8ML._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71N2WrMgN1L._SL1500_.jpg",
//     productTitle:
//       "Aristo Insulated Chiller Ice Box | Standard Size for Travel Party Bar Ice Cubes | Cold Drinks | Medical Purpose |25 Litre, Color May Vary",
//     productPrice: 1060,
//     rating: 4.3,
//   },
//   {
//     id: 379,
//     category: "sports",
//     subCategory: "campingandhiking",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71tw-Sg+UnS._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/619AjEt888L._SL1288_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61OO+YTqbuL._SL1400_.jpg",
//     productTitle:
//       "EcommerceHub® Ice Packs for Coolers Reusable Long Lasting Freezer Packs for Lunch Bags/Boxes, Cooler Backpack, Camping, Beach, Picnics, Fishing and More. Pack of 3, 500ML Each",
//     productPrice: 650,
//     rating: 4.3,
//   },
//   {
//     id: 380,
//     category: "sports",
//     subCategory: "campingandhiking",
//     productImage1: "https://m.media-amazon.com/images/I/41mySaXZxDL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/41mfMyyoZkL.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61CNl8reb2L._SL1000_.jpg",
//     productTitle:
//       "Yorten Gas Stove Mini Portable Square-Shaped Gas Butane Burner Camping Stove travelling Stainless Steel Cooking Stove Folding Furnace Stove with Storage Bag",
//     productPrice: 445,
//     rating: 4.6,
//   },
//   {
//     id: 381,
//     category: "sports",
//     subCategory: "campingandhiking",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71eICrP08IL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51wo0WcngqL._SL1024_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/516XbSqFg2L._SL1024_.jpg",
//     productTitle:
//       "Zippo WP16172 Aluminum Zippo Lighter Fluid 125ml, 6 Centimeter (Black)",
//     productPrice: 380,
//     rating: 4.1,
//   },
//   {
//     id: 382,
//     category: "sports",
//     subCategory: "campingandhiking",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61fMNbu8CaL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61vLJ3WXeBL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61pqnTjPAHL._SL1000_.jpg",
//     productTitle:
//       "CASSAFLIP Folding Bed | 1 Year Warranty | Multipurpose Bed | Portable Single Bed | Metal Frame Folding Bed | 1 Inch Synthetic Niwar Strip | (3X6 Feet Single Bed, Black - White Synthetic Stripe) ",
//     productPrice: 2296,
//     rating: 4.3,
//   },
//   {
//     id: 383,
//     category: "sports",
//     subCategory: "campingandhiking",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61tkfCKqlTL._SL1100_.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/61fTN9rQBtL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/61yUVhwBBrL.jpg",
//     productTitle:
//       "2023 Upgraded-Portable Collapsible Folding Stool, Retractable Telescoping Foldable Camping Stool for Adults for Outdoor Fishing Hiking Gardening Travel BBQ (Red)",
//     productPrice: 490,
//     rating: 4.2,
//   },
//   {
//     id: 384,
//     category: "sports",
//     subCategory: "campingandhiking",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61fB7+Sl2WL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81dxZy6yzhL._SL1500_.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/51r6ivsMp1L.jpg",
//     productTitle:
//       "Blastoise Folding Chair with Portable Carry Bag Adult Portable Outdoor Folding Chair Camping Hiking Fishing Picnic Chair",
//     productPrice: 989,
//     rating: 4.3,
//   },
//   {
//     id: 385,
//     category: "sports",
//     subCategory: "campingandhiking",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61YQ6I8UuyL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/91IRIXZX3bL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61yRJW0grEL._SL1500_.jpg",
//     productTitle:
//       "Sportneer Camping Tables: Portable Ultralight Camp Folding Side Table with Mesh Storage Bag Aluminum Table Top Great for Camp Picnic Backpacks Beach Tailgate Boat Medium Size",
//     productPrice: 1899,
//     rating: 4.2,
//   },
//   {
//     id: 386,
//     category: "sports",
//     subCategory: "campingandhiking",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71mgZBv-bLL._SL1500_.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/512oDf6BTwL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/617tuKSpqLL.jpg",
//     productTitle:
//       "CASON (DEVICE OF C) High Accuracy Metal Waterproof Military Compass For Directions (8 X 6.5 X 3 Cm, Green)",
//     productPrice: 615,
//     rating: 4.1,
//   },
//   {
//     id: 387,
//     category: "sports",
//     subCategory: "campingandhiking",
//     productImage1: "https://m.media-amazon.com/images/I/31y3QU6PG2L.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/41koEz1tTfL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/41PLptKXYHL.jpg",
//     productTitle:
//       "SIMRAH BRUNTON COMPASS full brass gun metal super defuxe working model",
//     productPrice: 1900,
//     rating: 4.1,
//   },
//   {
//     id: 388,
//     category: "sports",
//     subCategory: "campingandhiking",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51W-q1p7ohL._UL1080_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71K8J4-5YFL._UL1080_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71lEvZEhbuL._UL1080_.jpg",
//     productTitle:
//       "Carbonado Y 07 Hydration Backpack for 2 liters Water bladder capacity for motorcycling, cycling, trekking, running and outdoor adventure",
//     productPrice: 2190,
//     rating: 4.5,
//   },
//   {
//     id: 389,
//     category: "sports",
//     subCategory: "campingandhiking",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61jzRHUgcSL._SL1000_.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/41Aj8wC8tYL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/41UKFNYHP6L.jpg",
//     productTitle:
//       "14 IN 1 STAINLESS STEEL MULTIFUNCTIONAL HAMMER TOOL, Camping Accessories for Men and Women",
//     productPrice: 1499,
//     rating: 4.2,
//   },
//   {
//     id: 390,
//     category: "sports",
//     subCategory: "campingandhiking",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51oVG2-otpL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/41NuTb9PbLL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/51ncuMUQeaL._SL1500_.jpg",
//     productTitle:
//       "Victorinox Swiss Army Swiss Champ Wood Pocket Knife Multi-Tool, Walnut Wood, (1.6791.63)",
//     productPrice: 9930,
//     rating: 5,
//   },
//   {
//     id: 391,
//     category: "sports",
//     subCategory: "strengthtraining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61TFnKf6AZL._SL1000_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61TbEteqFiL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61Qyv5WJp6L._SL1000_.jpg",
//     productTitle:
//       "IDELLA® Resistance Band for Workout,Resistance Band Set of 11,Resistance Band for Heavy Workout-with Foam Handle Door Anchor Pull Ankle Strap (Latex)",
//     productPrice: 359,
//     rating: 4.5,
//   },
//   {
//     id: 392,
//     category: "sports",
//     subCategory: "strengthtraining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61+-OvFE3HL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/915Uwy2-MmL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71hfuHMRTKL._SL1500_.jpg",
//     productTitle:
//       "Nivia Lateral 2.0 Resistance Bands/Exercise Bands for Stretching and Heavy Workouts, for Home and Gym, Resistance Bands for Men and Women, for Home Fitness and Workout, (Pack of 1, Yellow Level-1)",
//     productPrice: 117,
//     rating: 4.1,
//   },
//   {
//     id: 393,
//     category: "sports",
//     subCategory: "strengthtraining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71l0xZ29TfS._SL1486_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71tSm79Z9AL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81bfo3fuBJL._SL1500_.jpg",
//     productTitle:
//       "Boldfit Resistance Tube with Foam Handles, Door Anchor for Exercise & Stretching, Suitable in Home & Gym Workout for Men & Women-Multi Resistance",
//     productPrice: 279,
//     rating: 4.5,
//   },
//   {
//     id: 394,
//     category: "sports",
//     subCategory: "strengthtraining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81vNVIhznXL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/91+UlCiVZML._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71UEcB+NP6L._SL1500_.jpg",
//     productTitle:
//       "Boldfit Gym Belt Weight Lifting Belts For Gym Exercise Belt Powerlifting Belt Deadlift Belt Gym Waist Belt For Men And Gym Waist Belt For Women Gym Accessories For Back Support Lifting Belt - Medium",
//     productPrice: 499,
//     rating: 4.2,
//   },
//   {
//     id: 395,
//     category: "sports",
//     subCategory: "strengthtraining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/71efZuOyE2L._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71aKlk9G2cL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/810GDcdCxKL._SL1500_.jpg",
//     productTitle:
//       "Boldfit Wrist Supporter for Gym Wrist Band for Men Gym & Women with Thumb Loop Straps - Wrist Wrap Gym Accessories for Men Hand Grip & Wrist Support Sports Straps for Gym",
//     productPrice: 189,
//     rating: 4.3,
//   },
//   {
//     id: 396,
//     category: "sports",
//     subCategory: "strengthtraining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61mUc9vBJqL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71yXD8Mod5L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71Livz+zcSL._SL1500_.jpg",
//     productTitle:
//       "RUBX Rubber Coated Professional Exercise Hex Fixed Dumbbells (Pack of Two) 5 Kg x 2pc (Total = 10 kg) Black",
//     productPrice: 1499,
//     rating: 4.2,
//   },
//   {
//     id: 397,
//     category: "sports",
//     subCategory: "strengthtraining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61YR+ojgjSL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71y0liBUTxL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71q8jwXdYNL._SL1500_.jpg",
//     productTitle:
//       "Dolphy Chrome Iron Fixed Dumbbell Set for Home Gym Workout (15 Kg,Silver) without carry bag",
//     productPrice: 699,
//     rating: 4.1,
//   },
//   {
//     id: 398,
//     category: "sports",
//     subCategory: "strengthtraining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51G2+xpRbRL._SL1001_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/51VFrtOVpaL._SL1000_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/51KEOX56O5L._SL1000_.jpg",
//     productTitle:
//       "National Bodyline LEEWAY Home Gym Bench|Adjustable Incline, Decline and Flat Bench| Adjustable gym bench| Workout bench for gym| Weight benches | Black | 180 KG- Max Capacity",
//     productPrice: 6282,
//     rating: 4.3,
//   },
//   {
//     id: 399,
//     category: "sports",
//     subCategory: "strengthtraining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/51qZY3+B8AL._SL1100_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61e+nBoG5UL._SL1100_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61kV04poPUL._SL1100_.jpg",
//     productTitle:
//       "Reach Multifunction Home Gym Station Weight Training Exercise Workout Equipment Fitness Strength Machine for Total Body Training | Perfect 12 in 1 Multi Gym Station",
//     productPrice: 18999,
//     rating: 4.5,
//   },
//   {
//     id: 400,
//     category: "sports",
//     subCategory: "strengthtraining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/616hNOpyXGL._SL1500_.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/41aS7rxTg0L.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/61diJZwb95L._SL1164_.jpg",
//     productTitle:
//       "GOCART WITH G LOGO Nonslip Carbon Steel Doorway Gym Bar, Pull-up Bar for Home, Mountable, Adjustable in Length, (Green, Size 63-95)",
//     productPrice: 799,
//     rating: 4.3,
//   },
//   {
//     id: 401,
//     category: "sports",
//     subCategory: "strengthtraining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/81Ad6X4HIFL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/81XzlLTLkqL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/81yJOrKsM3L._SL1500_.jpg",
//     productTitle:
//       "Amazon Brand - Symactive PVC 30 Kg Home Gym Set (30 Kg PVC Weight, 3 Ft Curl Rod, 14'' Dumbbell Rods Pair, 2 Locks/Clippers)",
//     productPrice: 1199,
//     rating: 4.3,
//   },
//   {
//     id: 402,
//     category: "sports",
//     subCategory: "strengthtraining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/61hJMfXLB0L._SL1024_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61hDCsBRskL._SL1024_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71ckN8F6jNL._SL1024_.jpg",
//     productTitle:
//       "Proberos® Ab Roller Set with Silent Knee Pad Mat for Exercise Gym, Premium Abdominal Ab Roller with Phone Holder for Core workout, fitness & Exercise, Home Workout Equipment for Men Women",
//     productPrice: 1499,
//     rating: 4.2,
//   },
//   {
//     id: 403,
//     category: "sports",
//     subCategory: "strengthtraining",
//     productImage1: "https://m.media-amazon.com/images/I/510nmqXq9VL.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/61IM3nC1B2L._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/51qMt1kon1L._SL1238_.jpg",
//     productTitle:
//       "Bhajan Pull up Bar for Home Sportneer Adjustable Length 60-100cm Hanging Rod for Height Increase No Screws Anti-skid Grip Hanging Bar for Pull-up Push up Chin up Bar for Home",
//     productPrice: 1399,
//     rating: 4.6,
//   },
//   {
//     id: 404,
//     category: "sports",
//     subCategory: "strengthtraining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/41Ej6eTBDtL._SL1280_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/41ZcQ34Y7IL._SL1280_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/41AiG1aVWwL._SL1280_.jpg",
//     productTitle:
//       "ALLYSON FITNESS Flat Gym Bench Home Workout Multipurpose Exercise Bench Press Weight Strength Training Flat Fixed Bench with 300 KG Capacity(Black)",
//     productPrice: 1849,
//     rating: 4.3,
//   },
//   {
//     id: 405,
//     category: "sports",
//     subCategory: "strengthtraining",
//     productImage1:
//       "https://m.media-amazon.com/images/I/717V7PL4CiL._SL1500_.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/I/71Pw-GgqHFL._SL1500_.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/I/71no8BXg3BL._SL1500_.jpg",
//     productTitle:
//       "ElectroSky ABS Pushup Board, 15 in 1 Push up board, pushup board for men, push up bar, pushup board, push up stand, pushup bars, gym equipment for men, excersing equipment, chest workout equipment (Black)",
//     productPrice: 499,
//     rating: 4.2,
//   },
//   {
//     id: 406,
//     category: "books",
//     subCategory: "books",
//     productImage1: "https://m.media-amazon.com/images/I/61M5G6mOayL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/51GxFgTMj2L.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/S/aplus-media-library-service-media/beaf0fa3-db01-4fe6-a410-64ccefba546b.__CR0,0,970,300_PT0_SX970_V1___.jpg",
//     productTitle: "Happiness is Success",
//     productPrice: 192,
//     rating: 4.1,
//   },
//   {
//     id: 407,
//     category: "books",
//     subCategory: "books",
//     productImage1: "https://m.media-amazon.com/images/I/71xwfwdGoZL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81N1MCpREAL.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/S/aplus-media-library-service-media/87825cef-260f-4e5c-a1a5-937fb2ddf8d7.__CR0,0,2910,900_PT0_SX970_V1___.jpg",
//     productTitle:
//       "Nala Damayanti: An Eternal Tale from the Mahabharata | A Tale of love and romance from the Mahabharatha on how Damayanti fought for her love, Nala",
//     productPrice: 209,
//     rating: 4.2,
//   },
//   {
//     id: 408,
//     category: "books",
//     subCategory: "books",
//     productImage1: "https://m.media-amazon.com/images/I/51ECm7V3OUL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/71dWUr45YGL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81T5EtfOgvL.jpg",
//     productTitle: "THE FUTURE IN THE PAST ESSAYS & REFLECTIONS",
//     productPrice: 670,
//     rating: 3.7,
//   },
//   {
//     id: 409,
//     category: "books",
//     subCategory: "books",
//     productImage1: "https://m.media-amazon.com/images/I/71AArvBA98L.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/51tj8JERF2L.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/518WbtSDOlL.jpg",
//     productTitle:
//       "In a Thousand Different Ways: the gripping, unforgettable new novel from the Sunday Times number 1 bestselling autho",
//     productPrice: 316,
//     rating: 4.2,
//   },
//   {
//     id: 410,
//     category: "books",
//     subCategory: "books",
//     productImage1: "https://m.media-amazon.com/images/I/8132G5lIIKL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/51oKDpdzmtL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/51kOErbxRPL.jpg",
//     productTitle:
//       "Robodog: The incredibly funny new illustrated children’s book for 2023, from the multi-million bestselling author of SPACEBOY",
//     productPrice: 381,
//     rating: 4.1,
//   },
//   {
//     id: 411,
//     category: "books",
//     subCategory: "books",
//     productImage1: "https://m.media-amazon.com/images/I/71bu6iYWCcL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81z2OBAkQOL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81ycvTj5w-L.jpg",
//     productTitle: "VAJPAYEE: The Ascent of the Hindu Right, 1924–1977",
//     productPrice: 650,
//     rating: 3.8,
//   },
//   {
//     id: 412,
//     category: "books",
//     subCategory: "books",
//     productImage1: "https://m.media-amazon.com/images/I/81bQUi8A8ML.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/91REd8NszWL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/51vZoRbu2dL.jpg",
//     productTitle:
//       "INDIAN ECONOMY (ENGLISH| 15TH EDITION) | UPSC | CIVIL SERVICES EXAM | STATE ADMINISTRATIVE EXAMS",
//     productPrice: 609,
//     rating: 4.2,
//   },
//   {
//     id: 413,
//     category: "books",
//     subCategory: "books",
//     productImage1: "https://m.media-amazon.com/images/I/61YbyFBLkOL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/71KPOyhFKzL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/51vZoRbu2dL.jpg",
//     productTitle:
//       "Indian Economy (English| 4th Edition) | UPSC | Civil Services Exam | State Administrative Exams",
//     productPrice: 599,
//     rating: 4.5,
//   },
//   {
//     id: 414,
//     category: "books",
//     subCategory: "books",
//     productImage1: "https://m.media-amazon.com/images/I/61oBE+cmhuL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/61pz9hE5JDL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/41oWsdXQZzL.jpg",
//     productTitle: "SSC (10+2) SOLVED PAPER (E) (2023) (Old Edition)",
//     productPrice: 178,
//     rating: 4.3,
//   },
//   {
//     id: 415,
//     category: "books",
//     subCategory: "books",
//     productImage1: "https://m.media-amazon.com/images/I/81UwR+vTkhL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/8168RmgdQEL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/71K0q+af7tL.jpg",
//     productTitle:
//       "A Walk in my Shoes : A #1 Fiction and romance bestseller novel. Your perfect valentine's day gift. Empower your love with this cute love story book",
//     productPrice: 249,
//     rating: 4.2,
//   },
//   {
//     id: 416,
//     category: "books",
//     subCategory: "books",
//     productImage1: "https://m.media-amazon.com/images/I/91lFp8dfX3L.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/91In91uRWNL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/91lCxFeqpsL.jpg",
//     productTitle: "Myra and The Secret Library",
//     productPrice: 189,
//     rating: 3.6,
//   },
//   {
//     id: 417,
//     category: "books",
//     subCategory: "books",
//     productImage1: "https://m.media-amazon.com/images/I/71XbYrkCEKL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81ax0HeMmOL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/818KElgx03L.jpg",
//     productTitle: "In Loving Memory",
//     productPrice: 189,
//     rating: 4.2,
//   },
//   {
//     id: 418,
//     category: "books",
//     subCategory: "books",
//     productImage1: "https://m.media-amazon.com/images/I/81W-oMLSFtL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81UB3F-GUqL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/912AWIz88yL.jpg",
//     productTitle: "Nobody Likes An Outside",
//     productPrice: 182,
//     rating: 3.8,
//   },
//   {
//     id: 419,
//     category: "books",
//     subCategory: "books",
//     productImage1: "https://m.media-amazon.com/images/I/71GBwRkvchL.jpg",
//     productImage2:
//       "https://m.media-amazon.com/images/S/aplus-media/vc/17d4d737-eaeb-4cec-a1b7-c38a717cfaa1.__CR0,0,970,300_PT0_SX970_V1___.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/S/aplus-media/vc/f8848701-3826-4390-957b-d854bd103b3a.__CR0,0,970,300_PT0_SX970_V1___.jpg",
//     productTitle: "Think Like a Monk 1st edition",
//     productPrice: 317,
//     rating: 4.5,
//   },
//   {
//     id: 420,
//     category: "books",
//     subCategory: "books",
//     productImage1: "https://m.media-amazon.com/images/I/91+NBrXG-PL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/818L-2d0FCL.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/S/aplus-media/vc/6f571476-4bc3-4ed8-8de1-eed63263f2d4.__CR0,0,1000,1000_PT0_SX300_V1___.jpg",
//     productTitle: "Promised Land",
//     productPrice: 1370,
//     rating: 4.7,
//   },
//   {
//     id: 421,
//     category: "books",
//     subCategory: "fictionbooks",
//     productImage1: "https://m.media-amazon.com/images/I/81tEgsxpNZS.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81DMkw1K0aL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81ZppxlozUL.jpg",
//     productTitle: "As a Man Thinketh",
//     productPrice: 69,
//     rating: 3.2,
//   },
//   {
//     id: 422,
//     category: "books",
//     subCategory: "fictionbooks",
//     productImage1: "https://m.media-amazon.com/images/I/81b1PP4RK1L.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/810a9z3veXL.jpg",
//     productImage3:
//       "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1539c8b8-b944-426f-a21c-767bef0f9920.__CR0,0,970,300_PT0_SX970_V1___.png",
//     productTitle:
//       "That Night: Four Friends, Twenty Years,: Four Friends. Twenty Years. One Haunting Secret.",
//     productPrice: 159,
//     rating: 3.9,
//   },
//   {
//     id: 423,
//     category: "books",
//     subCategory: "fictionbooks",
//     productImage1: "https://m.media-amazon.com/images/I/71H9cA7MvxS.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/8155m5x+euL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/8101fhazNRL.jpg",
//     productTitle: "The Art of War",
//     productPrice: 111,
//     rating: 4.6,
//   },
//   {
//     id: 424,
//     category: "books",
//     subCategory: "fictionbooks",
//     productImage1: "https://m.media-amazon.com/images/I/91yjbqL1V2S.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81teLeS-4ZL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/91rjPq9hEHL.jpg",
//     productTitle: "The Prophet",
//     productPrice: 85,
//     rating: 4.1,
//   },
//   {
//     id: 425,
//     category: "books",
//     subCategory: "fictionbooks",
//     productImage1: "https://m.media-amazon.com/images/I/21lN6H2p+nL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/917Bt42w4BL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/91i8JyyiiQL.jpg",
//     productTitle: "Mahabharata",
//     productPrice: 2242,
//     rating: 4.9,
//   },
//   {
//     id: 426,
//     category: "books",
//     subCategory: "fictionbooks",
//     productImage1: "https://m.media-amazon.com/images/I/91bWtphm61L.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81Mfg8pYRkL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81PkWVgCvfL.jpg",
//     productTitle:
//       "Bloomsbury Publishing India Harry Potter&The Philosopher's Stone",
//     productPrice: 1064,
//     rating: 4.5,
//   },
//   {
//     id: 427,
//     category: "books",
//     subCategory: "fictionbooks",
//     productImage1: "https://m.media-amazon.com/images/I/81ZI8RyyynL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81QwWqWIl9L.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/61BM-uMRxfL.jpg",
//     productTitle:
//       "The Hidden Hindu: Science-Fiction meets Indian mythology in a nail biting thriller set in 2020",
//     productPrice: 179,
//     rating: 4.1,
//   },
//   {
//     id: 428,
//     category: "books",
//     subCategory: "fictionbooks",
//     productImage1: "https://m.media-amazon.com/images/I/71ybul+HfOL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81hjDX3QqBL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81MuXCgbdpL.jpg",
//     productTitle: "Sunderkand (Hindi)",
//     productPrice: 109,
//     rating: 4.2,
//   },
//   {
//     id: 429,
//     category: "books",
//     subCategory: "fictionbooks",
//     productImage1: "https://m.media-amazon.com/images/I/71cpBSydJ0S.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/71867WWYNcL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/711V+cb2nwL.jpg",
//     productTitle:
//       "William Shakespeare (Set of 15 Books) - Hamlet, The Tempest, Othello, The Merchant of Venice, The Comedy of Errors, Richard III, Much Ado About ... Dream, Antony and Cleopatra",
//     productPrice: 1281,
//     rating: 4.2,
//   },
//   {
//     id: 430,
//     category: "books",
//     subCategory: "fictionbooks",
//     productImage1: "https://m.media-amazon.com/images/I/71+f+GXLk4L.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/8130vnvdVsL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81O9x0tV-yS.jpg",
//     productTitle: "Treasure Island ",
//     productPrice: 119,
//     rating: 4.2,
//   },
//   {
//     id: 431,
//     category: "books",
//     subCategory: "fictionbooks",
//     productImage1: "https://m.media-amazon.com/images/I/61ewyOG0IZS.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81nTGtXoZ0S.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/71u2QoFVg1S.jpg",
//     productTitle: "Hamlet",
//     productPrice: 114,
//     rating: 4.2,
//   },
//   {
//     id: 432,
//     category: "books",
//     subCategory: "fictionbooks",
//     productImage1: "https://m.media-amazon.com/images/I/71JLzfjq57S.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81dQgwi-RsL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/71ek4O9Zy6L.jpg",
//     productTitle: "Macbeth",
//     productPrice: 99,
//     rating: 3.2,
//   },
//   {
//     id: 433,
//     category: "books",
//     subCategory: "fictionbooks",
//     productImage1: "https://m.media-amazon.com/images/I/51J+KYDiEYL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/810D7nzIMsL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81oK6xzgajL.jpg",
//     productTitle: "The Girl in Room 105",
//     productPrice: 190,
//     rating: 4.2,
//   },
//   {
//     id: 434,
//     category: "books",
//     subCategory: "fictionbooks",
//     productImage1: "https://m.media-amazon.com/images/I/817tHNcyAgL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/71ShuXHX8kL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/41Ya5UnPezL.jpg",
//     productTitle: "The Fault in our Stars John Green",
//     productPrice: 344,
//     rating: 4.3,
//   },
//   {
//     id: 435,
//     category: "books",
//     subCategory: "fictionbooks",
//     productImage1: "https://m.media-amazon.com/images/I/917wUuyIaHL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/91JT-r+zSPL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/91A1CvGT2EL.jpg",
//     productTitle: "Arthashastra",
//     productPrice: 199,
//     rating: 4.5,
//   },
//   {
//     id: 436,
//     category: "books",
//     subCategory: "editorscorner",
//     productImage1: "https://m.media-amazon.com/images/I/81lZ-9E4F-S.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81W1PlMijgL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81igJ78l+fL.jpg",
//     productTitle: "The Diary of a Young Girl",
//     productPrice: 199,
//     rating: 4.2,
//   },
//   {
//     id: 437,
//     category: "books",
//     subCategory: "editorscorner",
//     productImage1: "https://m.media-amazon.com/images/I/81zqe4fNdlL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81FZzi9MBnL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81GOioVRFnL.jpg",
//     productTitle:
//       "Harry Potter Box Set: The Complete Collection (Children’s Paperback)",
//     productPrice: 2732,
//     rating: 3.5,
//   },
//   {
//     id: 438,
//     category: "books",
//     subCategory: "editorscorner",
//     productImage1: "https://m.media-amazon.com/images/I/81YVXgvXoAL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/71dwuPPludS.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/51CI1HcVmoS.jpg",
//     productTitle: "Murder on the Orient Express (Poirot)",
//     productPrice: 279,
//     rating: 4.3,
//   },
//   {
//     id: 439,
//     category: "books",
//     subCategory: "editorscorner",
//     productImage1: "https://m.media-amazon.com/images/I/71ImVTJ6cPL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/91wzHXAiQwL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/71wCvy-rhlL.jpg",
//     productTitle: "Maybe You Should Talk To Someone",
//     productPrice: 446,
//     rating: 4.5,
//   },
//   {
//     id: 440,
//     category: "books",
//     subCategory: "editorscorner",
//     productImage1: "https://m.media-amazon.com/images/I/81N0O3xjrnL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/91eNaZPdvHL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81-hXTFrKsL.jpg",
//     productTitle: "Pride & Prejudice (Deluxe Hardbound Edition)",
//     productPrice: 479,
//     rating: 4.1,
//   },
//   {
//     id: 441,
//     category: "books",
//     subCategory: "editorscorner",
//     productImage1: "https://m.media-amazon.com/images/I/81-0+kWbhYL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81N+o3Z7aVL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81qjANQ9+kL.jpg",
//     productTitle: "Wuthering Heights",
//     productPrice: 118,
//     rating: 4.2,
//   },
//   {
//     id: 442,
//     category: "books",
//     subCategory: "editorscorner",
//     productImage1: "https://m.media-amazon.com/images/I/81hHf6hXlCS.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81p7PEMRHPL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81Cfeq248QL.jpg",
//     productTitle: "Little Women",
//     productPrice: 199,
//     rating: 3.7,
//   },
//   {
//     id: 443,
//     category: "books",
//     subCategory: "editorscorner",
//     productImage1: "https://m.media-amazon.com/images/I/815rBf0vwHS.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/71bUsAzNWTL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81SjCx9BEBS.jpg",
//     productTitle: "Frankenstein",
//     productPrice: 119,
//     rating: 3.9,
//   },
//   {
//     id: 444,
//     category: "books",
//     subCategory: "editorscorner",
//     productImage1: "https://m.media-amazon.com/images/I/71ud9Tcj5YL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/91rUU6DGrmL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/71npth4nb8L.jpg",
//     productTitle: "THE GOLDFINCH",
//     productPrice: 449,
//     rating: 4.1,
//   },
//   {
//     id: 445,
//     category: "books",
//     subCategory: "editorscorner",
//     productImage1: "https://m.media-amazon.com/images/I/81KnxEZLtAL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81I4ljRmpQL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/71-zYqsEOAL.jpg",
//     productTitle:
//       "Good Night Stories for Rebel Girls: 100 Immigrant Women Who Changed the World (Volume 3)",
//     productPrice: 479,
//     rating: 4.2,
//   },
//   {
//     id: 446,
//     category: "books",
//     subCategory: "editorscorner",
//     productImage1: "https://m.media-amazon.com/images/I/81N90+49L4L.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/91hDc2hWvXL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81ilMKtD7CL.jpg",
//     productTitle:
//       "Mandala Art: Colouring books for Adults with tear out sheets",
//     productPrice: 149,
//     rating: 4.1,
//   },
//   {
//     id: 447,
//     category: "books",
//     subCategory: "editorscorner",
//     productImage1: "https://m.media-amazon.com/images/I/617JBhF7XcL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/71xibaytr+L.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/71f1l4r9P4L.jpg",
//     productTitle: "Steal Like an Artist",
//     productPrice: 599,
//     rating: 4.5,
//   },
//   {
//     id: 448,
//     category: "books",
//     subCategory: "editorscorner",
//     productImage1: "https://m.media-amazon.com/images/I/61zVVlfzdSL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/71LqYRuoa0L.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/313KKFEDI7L.jpg",
//     productTitle: "BEST OF OGDEN NASH",
//     productPrice: 1005,
//     rating: 3.9,
//   },
//   {
//     id: 449,
//     category: "books",
//     subCategory: "editorscorner",
//     productImage1: "https://m.media-amazon.com/images/I/41WZDysUJGL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81H1kFyl7LL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/71H0UoxXY5L.jpg",
//     productTitle: "Egghead: Or, You Can't Survive on Ideas Alone",
//     productPrice: 1169,
//     rating: 3.5,
//   },
//   {
//     id: 450,
//     category: "books",
//     subCategory: "editorscorner",
//     productImage1: "https://m.media-amazon.com/images/I/71+n2VSAiXS.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/710V6YbQzLL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/91ekGwy1JaL.jpg",
//     productTitle: "The Time Machine",
//     productPrice: 99,
//     rating: 4.1,
//   },
//   {
//     id: 451,
//     category: "books",
//     subCategory: "indianlanguagebooks",
//     productImage1: "https://m.media-amazon.com/images/I/81ZhjrARg2L.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81YZ1ui0V8L.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/31CDf-u5u2L.jpg",
//     productTitle: "The Hidden Hindu (Hindi Translation of The Hidden Hindu)",
//     productPrice: 154,
//     rating: 4.2,
//   },
//   {
//     id: 452,
//     category: "books",
//     subCategory: "indianlanguagebooks",
//     productImage1: "https://m.media-amazon.com/images/I/71UwU-b+aTS.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/814rOdapMcL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/71k-YKVuupL.jpg",
//     productTitle: "Think And Grow Rich - Hindi",
//     productPrice: 99,
//     rating: 4.8,
//   },
//   {
//     id: 453,
//     category: "books",
//     subCategory: "indianlanguagebooks",
//     productImage1: "https://m.media-amazon.com/images/I/81lH2oesPTL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81Skc9uWDmL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/71l65HYsOJL.jpg",
//     productTitle: "Rich Dad Poor Dad ( Original & Complete) Hindi",
//     productPrice: 316,
//     rating: 3.6,
//   },
//   {
//     id: 454,
//     category: "books",
//     subCategory: "indianlanguagebooks",
//     productImage1: "https://m.media-amazon.com/images/I/71ox+pwkgrS.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81W-qIe9P6L.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81rHN-1SEkL.jpg",
//     productTitle:
//       "Aapke Avchetan Mann Ki Shakti (The Power Of Your Subconscious Mind In Hindi)",
//     productPrice: 95,
//     rating: 4.1,
//   },
//   {
//     id: 455,
//     category: "books",
//     subCategory: "indianlanguagebooks",
//     productImage1: "https://m.media-amazon.com/images/I/81jj54IP54L.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/818V7OexZaL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81JTxsXryRL.jpg",
//     productTitle: "https://m.media-amazon.com/images/I/81JTxsXryRL.jpg",
//     productPrice: 219,
//     rating: 4.2,
//   },
//   {
//     id: 456,
//     category: "books",
//     subCategory: "indianlanguagebooks",
//     productImage1: "https://m.media-amazon.com/images/I/81iGBopWA9S.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/91wv9c9+GXL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81uZfjSFwRL.jpg",
//     productTitle: "Anandamath (Hindi) ",
//     productPrice: 109,
//     rating: 4.2,
//   },
//   {
//     id: 457,
//     category: "books",
//     subCategory: "indianlanguagebooks",
//     productImage1: "https://m.media-amazon.com/images/I/81xMHnnrIKL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81+JqQIGonL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81KkgO20MuL.jpg",
//     productTitle: "B.O.S.S (Hindi Version) Basics of Sanatan Sanskriti",
//     productPrice: 449,
//     rating: 4.1,
//   },
//   {
//     id: 458,
//     category: "books",
//     subCategory: "indianlanguagebooks",
//     productImage1: "https://m.media-amazon.com/images/I/81x5sv2Pn2L.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/91gEvKB-kEL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81vPO9O+hxL.jpg",
//     productTitle: "1984 (HINDI)",
//     productPrice: 109,
//     rating: 3.2,
//   },
//   {
//     id: 459,
//     category: "books",
//     subCategory: "indianlanguagebooks",
//     productImage1: "https://m.media-amazon.com/images/I/719OAEfLM8S.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81T9U2uVw-S.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/719OAEfLM8S.jpg",
//     productTitle: "Dhan-Sampatti Ka Manovigyan (The Psychology of Money)",
//     productPrice: 155,
//     rating: 4.2,
//   },
//   {
//     id: 460,
//     category: "books",
//     subCategory: "indianlanguagebooks",
//     productImage1: "https://m.media-amazon.com/images/I/7128u606j2L.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81epVGse67L.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/51tvirymimL.jpg",
//     productTitle: "(Hindi Book) Price Action Trading Technical Analysis Hindi",
//     productPrice: 332,
//     rating: 4.5,
//   },
//   {
//     id: 461,
//     category: "books",
//     subCategory: "indianlanguagebooks",
//     productImage1: "https://m.media-amazon.com/images/I/91QuOeM42RL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81fRarIjcLL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81pPGEFM-WL.jpg",
//     productTitle: "Atomic Habits: Chote Badlav, Asadharan Parinaam - Hindi",
//     productPrice: 264,
//     rating: 4.2,
//   },
//   {
//     id: 462,
//     category: "books",
//     subCategory: "indianlanguagebooks",
//     productImage1: "https://m.media-amazon.com/images/I/81k0tq4F5PL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81eu973WfDL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/71PIQzs+rHL.jpg",
//     productTitle: "RAHASYA (Hindi edition of The Secret)",
//     productPrice: 279,
//     rating: 4.7,
//   },
//   {
//     id: 463,
//     category: "books",
//     subCategory: "indianlanguagebooks",
//     productImage1: "https://m.media-amazon.com/images/I/91dl9Evr0nL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/91ys7B07lVL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/91WMDSnN4KL.jpg",
//     productTitle: "The Prophet (Hindi)",
//     productPrice: 179,
//     rating: 4.2,
//   },
//   {
//     id: 464,
//     category: "books",
//     subCategory: "indianlanguagebooks",
//     productImage1: "https://m.media-amazon.com/images/I/51i+iOiECTL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/51MuAlR4AHL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/61WRHeP-TeL.jpg",
//     productTitle:
//       "Dhyan tatha Isaki paddhatiyan(Hindi) Meditation and its method",
//     productPrice: 44,
//     rating: 4.1,
//   },
//   {
//     id: 465,
//     category: "books",
//     subCategory: "indianlanguagebooks",
//     productImage1: "https://m.media-amazon.com/images/I/81jnpCctfsL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81BUITodStL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81MVz8iqucL.jpg",
//     productTitle:
//       "Vaidik Dincharya : Rituals, Routines & Shlokas for ideal life",
//     productPrice: 299,
//     rating: 4,
//   },
//   {
//     id: 466,
//     category: "books",
//     subCategory: "schooltextbooks",
//     productImage1: "https://m.media-amazon.com/images/I/61BmKP7kHXL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/61jQIJqdIvL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/51jim-WPp3L.jpg",
//     productTitle:
//       "Arihant All In One Class 9th Social Science for CBSE Exam 2024 ",
//     productPrice: 318,
//     rating: 3.8,
//   },
//   {
//     id: 467,
//     category: "books",
//     subCategory: "schooltextbooks",
//     productImage1: "https://m.media-amazon.com/images/I/61SSiX7iCbL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/61H2YhD0ulL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/51sQhvHMq7L.jpg",
//     productTitle:
//       "Arihant All In One Class 11th English Core for CBSE Exam 2024",
//     productPrice: 239,
//     rating: 4.3,
//   },
//   {
//     id: 468,
//     category: "books",
//     subCategory: "schooltextbooks",
//     productImage1: "https://m.media-amazon.com/images/I/71p-NHOmJcL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81OaDeUShgL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81iuUlydCWL.jpg",
//     productTitle:
//       "Oswal - Gurukul Last Years 10 Solved Papers for CBSE Class 10 Exam 2024 - Yearwise Board Solutions of Math Standard, English, Science & Social Science (All Sets Delhi & Outside), Latest Syllabus",
//     productPrice: 679,
//     rating: 4.2,
//   },
//   {
//     id: 469,
//     category: "books",
//     subCategory: "schooltextbooks",
//     productImage1: "https://m.media-amazon.com/images/I/81qYVe2g-1L.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81f9KBrhWYL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81ZbqDhHOyL.jpg",
//     productTitle:
//       "Oswal - Gurukul 10 Years Solved Papers for ICSE 10 Exam 2024 - Comprehensive Handbook of 17 Subjects - Yearwise Board Solutions, Revised Syllabus",
//     productPrice: 790,
//     rating: 3.5,
//   },
//   {
//     id: 470,
//     category: "books",
//     subCategory: "schooltextbooks",
//     productImage1: "https://m.media-amazon.com/images/I/61nVytOBxcL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/618ty-zYJ8L.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/51BKoJsttOL.jpg",
//     productTitle:
//       "Arihant All In One Class 11th Mathematics for CBSE Exam 2024 ",
//     productPrice: 305,
//     rating: 4.1,
//   },
//   {
//     id: 471,
//     category: "books",
//     subCategory: "schooltextbooks",
//     productImage1: "https://m.media-amazon.com/images/I/71jwoZf9XIL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/61lE9FNzA9L.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/71HqDtnlI8L.jpg",
//     productTitle:
//       "MTG International Mathematics Olympiad (IMO) Workbook for Class 3 - MCQs, Previous Years Solved Paper and Achievers Section - SOF Olympiad Preparation Books For 2023-2024 Exam",
//     productPrice: 99,
//     rating: 3.6,
//   },
//   {
//     id: 472,
//     category: "books",
//     subCategory: "schooltextbooks",
//     productImage1: "https://m.media-amazon.com/images/I/A1AN37Ta+fL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/A1TszPlHifL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/A1i720HGKCL.jpg",
//     productTitle:
//       "R D Sharma Mathematics Class 10 with MCQ in Mathematics - CBSE Examination 2023-2024",
//     productPrice: 689,
//     rating: 4.1,
//   },
//   {
//     id: 473,
//     category: "books",
//     subCategory: "schooltextbooks",
//     productImage1: "https://m.media-amazon.com/images/I/71oHphHM71L.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/71bOd+FTFrL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81NFQC1VlXL.jpg",
//     productTitle:
//       "Oxford Student Atlas for India, Fourth Edition - Useful for Competitive Exams",
//     productPrice: 239,
//     rating: 4.2,
//   },
//   {
//     id: 474,
//     category: "books",
//     subCategory: "schooltextbooks",
//     productImage1: "https://m.media-amazon.com/images/I/816rjoPwKeL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/81R+4cfILoL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81l-b+wsqeL.jpg",
//     productTitle: "Oswaal CBSE Class 10 Science Question Bank (2024 Exam)",
//     productPrice: 425,
//     rating: 4.2,
//   },
//   {
//     id: 475,
//     category: "books",
//     subCategory: "schooltextbooks",
//     productImage1: "https://m.media-amazon.com/images/I/818gCkfx9jL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/71dpcxG-UqL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/71nddxtOilL.jpg",
//     productTitle:
//       "Ultimate Foundation Series for JEE & NEET Chemistry: Class VI",
//     productPrice: 242,
//     rating: 3.8,
//   },
//   {
//     id: 476,
//     category: "books",
//     subCategory: "schooltextbooks",
//     productImage1: "https://m.media-amazon.com/images/I/61kGgmomlWL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/611yTK6tg2L.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/41hk1NxHhHL.jpg",
//     productTitle:
//       "Arihant NCERT Exemplar Problems Solutions Mathematics class 10th",
//     productPrice: 144,
//     rating: 3.9,
//   },
//   {
//     id: 477,
//     category: "books",
//     subCategory: "schooltextbooks",
//     productImage1: "https://m.media-amazon.com/images/I/814Ekf2KBbL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/61Xwa4lUqRL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/716yzsJZwcL.jpg",
//     productTitle:
//       "MTG National Science Olympiad (NSO) Workbook for Class 3 - Quick Recap, MCQs, Previous Years Solved Paper and Achievers Section - SOF Olympiad Preparation Books For 2023-2024 Exam",
//     productPrice: 99,
//     rating: 4.2,
//   },
//   {
//     id: 478,
//     category: "books",
//     subCategory: "schooltextbooks",
//     productImage1: "https://m.media-amazon.com/images/I/61XLiWjs5tL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/61Ek6O5UzwL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/81LBCvRsgSL.jpg",
//     productTitle: "High School English Gram & Comp (Reg Ed)",
//     productPrice: 362,
//     rating: 4.1,
//   },
//   {
//     id: 479,
//     category: "books",
//     subCategory: "schooltextbooks",
//     productImage1: "https://m.media-amazon.com/images/I/81qZ6Te07UL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/71nNy5+NjyL.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/71ctaihO8OL.jpg",
//     productTitle:
//       "MTG International English Olympiad (IEO) Workbook for Class 7 - MCQs, Previous Years Solved Paper and Achievers Section - SOF Olympiad Preparation Books For 2023-2024 Exam",
//     productPrice: 99,
//     rating: 3.9,
//   },
//   {
//     id: 480,
//     category: "books",
//     subCategory: "schooltextbooks",
//     productImage1: "https://m.media-amazon.com/images/I/816emu+VEvL.jpg",
//     productImage2: "https://m.media-amazon.com/images/I/61obKy4-I4L.jpg",
//     productImage3: "https://m.media-amazon.com/images/I/61eGLBU9sYL.jpg",
//     productTitle:
//       "MTG International General Knowledge Olympiad (IGKO) Workbook for Class 3 - MCQs & Achievers Section - SOF IGKO Olympiad Preparation Books For 2023-2024 Exam",
//     productPrice: 99,
//     rating: 4.1,
//   },
];

const addData = async (req, res) => {
  await productsModel.insertMany(data);
  res.send("Data added successfully");
};
const allData = async (req, res) => {
    const data = await productsModel.find();
    res.send(data);
};
const electronics = async (req, res) => {
    const data = await productsModel.find({ category: "electronics" });
    res.send(data);
};
const laptops = async (req, res) => {
  const data = await productsModel.find({ subCategory: "computersandaccessories" });
  res.send(data);
};
const cellPhonesAndAccessories = async (req, res) => {
  const data = await productsModel.find({
    subCategory: "cellphonesandaccessories",
  });
  res.send(data);
};
const computersAndAccessories = async (req, res) => {
  const data = await productsModel.find({
    subCategory: "computersandaccessories",
  });
  res.send(data);
};
const headphones = async (req, res) => {
  const data = await productsModel.find({ subCategory: "headphones" });
  res.send(data);
};
const television = async (req, res) => {
  const data = await productsModel.find({ subCategory: "televisionandvideo" });
  res.send(data);
};
const smartHome = async (req, res) => {
  const data = await productsModel.find({ subCategory: "smarthome" });
  res.send(data);
};
const phones = async (req, res) => {
  const data = await productsModel.find({ subCategory: "cellphonesandaccessories" });
  res.send(data);
};
const fashion = async (req, res) => {
  const data = await productsModel.find({ subCategory: "fashion" });
  res.send(data);
};
const mensFashion = async (req, res) => {
  const data = await productsModel.find({ subCategory: "mensfashion" });
  res.send(data);
};
const womensFashion = async (req, res) => {
  const data = await productsModel.find({ subCategory: "womensfashion" });
  res.send(data);
};
const kidsFashion = async (req, res) => {
  const data = await productsModel.find({ subCategory: "kidsfashion" });
  res.send(data);
};

// const homeAndKitchen = async (req, res) => {
//   const data = await productsModel.find({ category: "homeandkitchen" });
//   res.send(data);
// };
// const kitchenAndDining = async (req, res) => {
//   const data = await productsModel.find({ subCategory: "kitchenanddining" });
//   res.send(data);
// };
// const furniture = async (req, res) => {
//   const data = await productsModel.find({ subCategory: "furniture" });
//   res.send(data);
// };
// const homeDecor = async (req, res) => {
//   const data = await productsModel.find({ subCategory: "homedecor" });
//   res.send(data);
// };
// const storageAndOrganization = async (req, res) => {
//   const data = await productsModel.find({
//     subCategory: "storageandorganization",
//   });
//   res.send(data);
// };
// const healthAndPersonalCare = async (req, res) => {
//   const data = await productsModel.find({ category: "healthandpersonalcare" });
//   res.send(data);
// };
// const householdSupplies = async (req, res) => {
//   const data = await productsModel.find({ subCategory: "householdsupplies" });
//   res.send(data);
// };
// const beautyToolsAndAccessories = async (req, res) => {
//   const data = await productsModel.find({
//     subCategory: "beautytoolsandaccessories",
//   });
//   res.send(data);
// };
// const dietAndNutrition = async (req, res) => {
//   const data = await productsModel.find({ subCategory: "dietandnutrition" });
//   res.send(data);
// };
// const personalCareAppliances = async (req, res) => {
//   const data = await productsModel.find({
//     subCategory: "personalcareappliances",
//   });
//   res.send(data);
// };
// const sports = async (req, res) => {
//   const data = await productsModel.find({ category: "sports" });
//   res.send(data);
// };
// const cricket = async (req, res) => {
//   const data = await productsModel.find({ subCategory: "cricket" });
//   res.send(data);
// };
// const badminton = async (req, res) => {
//   const data = await productsModel.find({ subCategory: "badminton" });
//   res.send(data);
// };
// const football = async (req, res) => {
//   const data = await productsModel.find({ subCategory: "football" });
//   res.send(data);
// };
// const yoga = async (req, res) => {
//   const data = await productsModel.find({ subCategory: "yoga" });
//   res.send(data);
// };
// const campingAndHiking = async (req, res) => {
//   const data = await productsModel.find({ subCategory: "campingandhiking" });
//   res.send(data);
// };
// const strengthTraining = async (req, res) => {
//   const data = await productsModel.find({ subCategory: "strengthtraining" });
//   res.send(data);
// };
// const fictionBooks = async (req, res) => {
//   const data = await productsModel.find({ subCategory: "fictionbooks" });
//   res.send(data);
// };
// const editorsCorner = async (req, res) => {
//   const data = await productsModel.find({ subCategory: "editorscorner" });
//   res.send(data);
// };
// const indianLanguageBooks = async (req, res) => {
//   const data = await productsModel.find({ subCategory: "indianlanguagebooks" });
//   res.send(data);
// };
// const schoolTextbooks = async (req, res) => {
//   const data = await productsModel.find({ subCategory: "schooltextbooks" });
//   res.send(data);
// };

module.exports = {
  addData,
  allData,
  electronics,
  cellPhonesAndAccessories,
  computersAndAccessories,
  headphones,
  television,
  smartHome,
  laptops,
  phones,
  fashion,
  mensFashion,
  womensFashion,
  kidsFashion,
//   homeAndKitchen,
//   kitchenAndDining,
//   furniture,
//   homeDecor,
//   storageAndOrganization,
//   healthAndPersonalCare,
//   householdSupplies,
//   beautyToolsAndAccessories,
//   dietAndNutrition,
//   personalCareAppliances,
//   sports,
//   cricket,
//   badminton,
//   football,
//   yoga,
//   campingAndHiking,
//   strengthTraining,
//   books,
//   fictionBooks,
//   editorsCorner,
//   indianLanguageBooks,
//   schoolTextbooks,
};

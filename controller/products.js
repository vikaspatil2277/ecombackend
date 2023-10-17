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


  //phones...........................
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


//laptops..................................................

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



//television......................................

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

//fashion........................................


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

      //mixed


      
{
  id: 1001,
  category: "electronics",
  subCategory: "mixed",
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
  id: 1002,
  category: "electronics",
  subCategory:  "mixed",
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
  id: 1003,
  category: "electronics",
  subCategory: "mixed",
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
  id: 1004,
  category: "electronics",
  subCategory:  "mixed",
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
  id: 1005,
  category: "electronics",
  subCategory:  "mixed",
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
  id: 1006,
  category: "electronics",
  subCategory: "mixed",
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
  id: 1007,
  category: "electronics",
  subCategory: "mixed",
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
  id: 1008,
  category: "fashion",
  subCategory:  "mixed",
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
  id: 1009,
  category: "fashion",
  subCategory:  "mixed",
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
  id: 1010,
  category: "fashion",
  subCategory:  "mixed",
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
  id: 1011,
  category: "electronics",
  subCategory: "mixed",
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
  id: 1012,
  category: "electronics",
  subCategory:  "mixed",
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




];

const addData = async (req, res) => {
  await productsModel.insertMany(data);
  res.send("Data added successfully");
};
const allData = async (req, res) => {
    const data = await productsModel.find();
    res.send(data);
};

const laptops = async (req, res) => {
  const data = await productsModel.find({ subCategory: "computersandaccessories" });
  res.send(data);
};

const television = async (req, res) => {
  const data = await productsModel.find({ subCategory: "televisionandvideo" });
  res.send(data);
};

const phones = async (req, res) => {
  const data = await productsModel.find({ subCategory: "cellphonesandaccessories" });
  res.send(data);
};
const mixed= async (req, res) => {
  const data = await productsModel.find({ subCategory: "mixed" });
  res.send(data);
};
const fashion = async (req, res) => {
  const data = await productsModel.find({ subCategory: "fashion"});
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



module.exports = {
  addData,
  allData,
  mixed,
  television, 
  laptops,
  phones,
  fashion,
  mensFashion,
  womensFashion,
  kidsFashion,

};

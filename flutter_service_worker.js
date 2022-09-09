'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cf85bccb4d83e421125eeb6464e4cc7e",
"assets/FontManifest.json": "d4318cf943a1b7e29f8bb9f4539b3bc6",
"assets/fonts/Batangas-Bold-700.otf": "1434f804be72dd0894d653241a12652c",
"assets/fonts/Kanit-Medium.ttf": "87ad7842e1bf82f18acd2bcdd4b0f006",
"assets/fonts/Kanit-Regular.ttf": "dee71812c8870b4c5ec6fa0cdc68c25c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/apple.png": "5c22d20306204652df71ba9fb17d08f9",
"assets/images/google_logo.png": "75401c921c67c0f3b04399ef3b546929",
"assets/images/ic_facebook.png": "a4b0a234d5b0ce5c87b8f16a34e3ca10",
"assets/images/Logo.png": "dff178ea5072992830bd49a7331e2cd4",
"assets/images/recipe/01.jpg": "68ba2c483f4660633e652c87b2629461",
"assets/images/recipe/02.jpg": "52baea9b1e95cb89768ec31946f736da",
"assets/images/recipe/03.jpg": "50cd502a58d588af08e9c024741284e4",
"assets/images/recipe/04.jpg": "3a1c3979b8cd312b06ec1f107303ee43",
"assets/images/recipe/05.jpg": "bbc3e4c0167df656600e840b0e2a9bb4",
"assets/images/recipe/a/01.jpg": "68ba2c483f4660633e652c87b2629461",
"assets/images/recipe/a/02.jpg": "4b1ab9d1d40e312703acbf22bcdc7aa4",
"assets/images/recipe/a/03.jpg": "b3bbfacdf579437e5c3dfe5f4e595eae",
"assets/images/recipe/a/04.jpg": "97a6acdf25dbe01b59ae8a3877b0fc48",
"assets/images/recipe/a/05.jpg": "bb95190e560702da48ba4f1a2ca7ab12",
"assets/images/recipe/a/Cover.png": "c3319ce7eab227733bc14ee57e3f6ad1",
"assets/images/recipe/a/Description.png": "6eef16966be503143cffa08dff404b8a",
"assets/images/recipe/a/Ingredients/01.png": "a297e8bd5bd3bfcc965b141b5f23650a",
"assets/images/recipe/a/Ingredients/02.png": "55fbfe2240846dc72b92d5abd28d49c7",
"assets/images/recipe/a/Ingredients/03-%25E0%25B8%2582%25E0%25B8%25A1%25E0%25B8%25B4%25E0%25B9%2589%25E0%25B8%2599%25E0%25B8%259C%25E0%25B8%2587.png": "f545f11adb4ba36d99b5132fcb74b92f",
"assets/images/recipe/a/Ingredients/03.png": "2d109c6c6880786c769f942c6501ff6e",
"assets/images/recipe/a/Ingredients/05-%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%259E%25E0%25B8%25A3%25E0%25B8%25B4%25E0%25B8%2581%25E0%25B9%2581%25E0%25B8%2581%25E0%25B8%2587%25E0%25B9%2581%25E0%25B8%2594%25E0%25B8%2587.png": "2aac0176201a9eb5a6ce9d11d1ca306c",
"assets/images/recipe/a/Ingredients/06-%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%2595%25E0%25B8%25B2%25E0%25B8%25A5%25E0%25B8%2597%25E0%25B8%25A3%25E0%25B8%25B2%25E0%25B8%25A2%25E0%25B9%2581%25E0%25B8%2594%25E0%25B8%2587.png": "643b4ba4751376a803dc10d44ad1dda5",
"assets/images/recipe/a/Ingredients/07-%25E0%25B8%258B%25E0%25B8%25B5%25E0%25B8%25AD%25E0%25B8%25B4%25E0%25B9%258A%25E0%25B8%25A7%25E0%25B8%2582%25E0%25B8%25B2%25E0%25B8%25A7.png": "f070d215c0cbf4b9a965267fdbf86c61",
"assets/images/recipe/a/Ingredients/09-%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%25A1%25E0%25B8%25B1%25E0%25B8%2599%25E0%25B8%25AB%25E0%25B8%25AD%25E0%25B8%25A2.png": "2aba9ae1440f65e625ec820130a285ba",
"assets/images/recipe/a/Ingredients/10-%25E0%25B9%2584%25E0%25B8%25AA%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B9%2588%25E0%25B8%25AD%25E0%25B8%2599.png": "f7eafade34e8ea80c1b5801a0975a9a3",
"assets/images/recipe/a/Ingredients/8-%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%259B%25E0%25B8%25A5%25E0%25B8%25B2.png": "aa5f6ecabc5b5b13193c0fa03b79c477",
"assets/images/recipe/b/01.jpg": "5a762c2265aa44de98e20dcd31cedc36",
"assets/images/recipe/b/02.jpg": "52baea9b1e95cb89768ec31946f736da",
"assets/images/recipe/b/03.jpg": "3adcc7e2a450dc4f33c15f376d99c082",
"assets/images/recipe/b/04.png": "12ab5f35d1a469d604a88923caaf35fc",
"assets/images/recipe/b/05.jpg": "530cd08edf44d41ed43af3d4e5e2151d",
"assets/images/recipe/b/Cover.png": "bf547c5f49bcaace6f4f5d7d7d3a7c63",
"assets/images/recipe/b/Description.png": "2c33194a5850af4b723f67bc61b5f401",
"assets/images/recipe/b/Ingredients/01-%25E0%25B8%2599%25E0%25B9%2588%25E0%25B8%25AD%25E0%25B8%2587%25E0%25B9%2584%25E0%25B8%2581%25E0%25B9%2588.png": "20d9b0895a9fb96bd201177216d00b4a",
"assets/images/recipe/b/Ingredients/02-%25E0%25B8%259E%25E0%25B8%25A3%25E0%25B8%25B4%25E0%25B8%2581%25E0%25B8%2582%25E0%25B9%2589%25E0%25B8%25B2%25E0%25B8%25A7%25E0%25B8%258B%25E0%25B8%25AD%25E0%25B8%25A2.png": "e63ffbc913e737eb245dcda26c109eb9",
"assets/images/recipe/b/Ingredients/03-%25E0%25B8%2581%25E0%25B8%25B0%25E0%25B8%2597%25E0%25B8%25B4.png": "f4c5b6b5ea551bba00fe67eb0315df1d",
"assets/images/recipe/b/Ingredients/04-%25E0%25B9%2580%25E0%25B8%25AA%25E0%25B9%2589%25E0%25B8%2599%25E0%25B8%2582%25E0%25B9%2589%25E0%25B8%25B2%25E0%25B8%25A7%25E0%25B8%258B%25E0%25B8%25AD%25E0%25B8%25A2.png": "33bfc1a1315807efe87a1697d68b593e",
"assets/images/recipe/b/Ingredients/05-%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%25A1%25E0%25B8%25B1%25E0%25B8%2599%25E0%25B8%259E%25E0%25B8%25B7%25E0%25B8%258A.png": "c012bd1ac1ec162b73fda2a642b97b2e",
"assets/images/recipe/b/Ingredients/06-%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%259B%25E0%25B8%25A5%25E0%25B8%25B2.png": "aa5f6ecabc5b5b13193c0fa03b79c477",
"assets/images/recipe/b/Ingredients/07-%25E0%25B9%2580%25E0%25B8%2581%25E0%25B8%25A5%25E0%25B8%25B7%25E0%25B8%25AD.png": "4051cd3d69806dddc11d20483fa13495",
"assets/images/recipe/b/Ingredients/08-%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%2595%25E0%25B8%25B2%25E0%25B8%25A5%25E0%25B8%25A1%25E0%25B8%25B0%25E0%25B8%259E%25E0%25B8%25A3%25E0%25B9%2589%25E0%25B8%25B2%25E0%25B8%25A7.png": "5c0e5f68740b64d2a3ffc9aa5695d982",
"assets/images/recipe/b/Ingredients/09-%25E0%25B8%259E%25E0%25B8%25A3%25E0%25B8%25B4%25E0%25B8%2581%25E0%25B8%259C%25E0%25B8%25B1%25E0%25B8%2594.png": "ac80e87d02875a45817424df15990638",
"assets/images/recipe/b/Ingredients/10-%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%25AA%25E0%25B8%25B0%25E0%25B8%25AD%25E0%25B8%25B2%25E0%25B8%2594.png": "4eddd64738e3a8de05f0a70c097bee86",
"assets/images/recipe/b/Ingredients/11-%25E0%25B8%25AB%25E0%25B8%25AD%25E0%25B8%25A1%25E0%25B9%2581%25E0%25B8%2582%25E0%25B8%2581%25E0%25B8%258B%25E0%25B8%25AD%25E0%25B8%25A2.png": "a88d075de17932d94fc1f55feaf94d72",
"assets/images/recipe/b/Ingredients/12-%25E0%25B8%259C%25E0%25B8%25B1%25E0%25B8%2581%25E0%25B8%2581%25E0%25B8%25B2%25E0%25B8%2594%25E0%25B8%2594%25E0%25B8%25AD%25E0%25B8%2587%25E0%25B8%258B%25E0%25B8%25AD%25E0%25B8%25A2.png": "627499562eec500e3ff3fb085b55d56b",
"assets/images/recipe/b/Ingredients/13-%25E0%25B8%2595%25E0%25B9%2589%25E0%25B8%2599%25E0%25B8%25AB%25E0%25B8%25AD%25E0%25B8%25A1%25E0%25B8%259C%25E0%25B8%25B1%25E0%25B8%2581%25E0%25B8%258A%25E0%25B8%25B5.png": "55fbfe2240846dc72b92d5abd28d49c7",
"assets/images/recipe/bg.jpg": "caacf6d6c8510d7307ea63a862146881",
"assets/images/recipe/c/01.jpg": "0f054cc04f3b8b836a29ccd057ae6fe9",
"assets/images/recipe/c/02.jpg": "f2152fa34e05d3066fc949bde467dd2f",
"assets/images/recipe/c/03.jpg": "a4f91f1179032a869e9290a270e0d24d",
"assets/images/recipe/c/04.jpg": "e73d003595340577d599afe9c89711ed",
"assets/images/recipe/c/05.jpg": "50cd502a58d588af08e9c024741284e4",
"assets/images/recipe/c/Cover.png": "5d8ef844d8ee34779ee43c6c3176c662",
"assets/images/recipe/c/Description.png": "fb8d9fdba9a09344f28f0366417093d2",
"assets/images/recipe/c/Ingredients/01-%25E0%25B8%2599%25E0%25B9%2588%25E0%25B8%25AD%25E0%25B8%2587%25E0%25B9%2584%25E0%25B8%2581%25E0%25B9%2588.png": "20d9b0895a9fb96bd201177216d00b4a",
"assets/images/recipe/c/Ingredients/02-%25E0%25B8%2582%25E0%25B9%2588%25E0%25B8%25B2%25E0%25B8%258B%25E0%25B8%25AD%25E0%25B8%25A2.png": "ce5e7186e069358f34be8323fde5dd58",
"assets/images/recipe/c/Ingredients/03-%25E0%25B8%2595%25E0%25B8%25B0%25E0%25B9%2584%25E0%25B8%2584%25E0%25B8%25A3%25E0%25B9%2589.png": "9137017d77a9b0bef14cc47416ac1a9a",
"assets/images/recipe/c/Ingredients/04-%25E0%25B8%259E%25E0%25B8%25A3%25E0%25B8%25B4%25E0%25B8%2581%25E0%25B8%2588%25E0%25B8%25B4%25E0%25B8%2599%25E0%25B8%2594%25E0%25B8%25B2.png": "f2cff4499a05d295d89cda83f48e4bf3",
"assets/images/recipe/c/Ingredients/05-%25E0%25B8%259E%25E0%25B8%25A3%25E0%25B8%25B4%25E0%25B8%2581%25E0%25B8%2582%25E0%25B8%25B5%25E0%25B9%2589%25E0%25B8%25AB%25E0%25B8%2599%25E0%25B8%25B9.png": "1d7d56a8a6ce423d691b22265679daef",
"assets/images/recipe/c/Ingredients/06-%25E0%25B8%25A3%25E0%25B8%25B2%25E0%25B8%2581%25E0%25B8%259C%25E0%25B8%25B1%25E0%25B8%2581%25E0%25B8%258A%25E0%25B8%25B5.png": "de52eda12fe588b3711a67516baecfc1",
"assets/images/recipe/c/Ingredients/07-%25E0%25B9%2583%25E0%25B8%259A%25E0%25B8%25A1%25E0%25B8%25B0%25E0%25B8%2581%25E0%25B8%25A3%25E0%25B8%25B9%25E0%25B8%2594.png": "2d109c6c6880786c769f942c6501ff6e",
"assets/images/recipe/c/Ingredients/08-%25E0%25B8%2581%25E0%25B8%25A3%25E0%25B8%25B0%25E0%25B9%2580%25E0%25B8%2597%25E0%25B8%25B5%25E0%25B8%25A2%25E0%25B8%25A1.png": "0b4edf77c4cfef40bc1f23dc34eea241",
"assets/images/recipe/c/Ingredients/09-%25E0%25B8%25AB%25E0%25B8%25AD%25E0%25B8%25A1%25E0%25B9%2581%25E0%25B8%2582%25E0%25B8%2581%25E0%25B8%258B%25E0%25B8%25AD%25E0%25B8%25A2.png": "a88d075de17932d94fc1f55feaf94d72",
"assets/images/recipe/c/Ingredients/10-%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%259B%25E0%25B8%25A5%25E0%25B8%25B2.png": "aa5f6ecabc5b5b13193c0fa03b79c477",
"assets/images/recipe/c/Ingredients/11-%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%259B%25E0%25B8%25A5%25E0%25B8%25B2%25E0%25B8%25A3%25E0%25B9%2589%25E0%25B8%25B2.png": "66092b84a761d895640f8622e0011c01",
"assets/images/recipe/cooking.png": "337f9b101d3349b715760265c32e8075",
"assets/images/recipe/d/01.jpg": "3a1c3979b8cd312b06ec1f107303ee43",
"assets/images/recipe/d/02.jpg": "9bb4d0441940ac5e2e090f130fcbd37a",
"assets/images/recipe/d/03.jpg": "7a72fa0e46d9f626d3ee5179c6d5b9fd",
"assets/images/recipe/d/04.jpg": "bf1cdc8eef29933763ebbe31fdfcddb3",
"assets/images/recipe/d/05.jpg": "73e34a4ee162f7506e14c4e65c068871",
"assets/images/recipe/d/Cover.png": "8c741279e1cee1086e85dc1254c81f27",
"assets/images/recipe/d/Description.png": "c1f51a005884cecbf17a50041a65a86e",
"assets/images/recipe/d/Ingredients/01-%25E0%25B8%2582%25E0%25B8%2599%25E0%25B8%25A1%25E0%25B8%2588%25E0%25B8%25B5%25E0%25B8%2599.png": "06ef7e0cb4924d998502ac1068bb9a2e",
"assets/images/recipe/d/Ingredients/02-%25E0%25B8%25AB%25E0%25B8%25A1%25E0%25B8%25B9%25E0%25B8%259A%25E0%25B8%2594.png": "a297e8bd5bd3bfcc965b141b5f23650a",
"assets/images/recipe/d/Ingredients/03-%25E0%25B8%258B%25E0%25B8%25B5%25E0%25B9%2588%25E0%25B9%2582%25E0%25B8%2584%25E0%25B8%25A3%25E0%25B8%2587%25E0%25B8%25AB%25E0%25B8%25A1%25E0%25B8%25B9.png": "83cc5cf9f1f17da939d3e7f0d2e9bf91",
"assets/images/recipe/d/Ingredients/04-%25E0%25B9%2580%25E0%25B8%25A5%25E0%25B8%25B7%25E0%25B8%25AD%25E0%25B8%2594%25E0%25B8%25AB%25E0%25B8%25A1%25E0%25B8%25B9.png": "d4651c6eaf0d0e0ddc3f0c5b107c12fe",
"assets/images/recipe/d/Ingredients/05-%25E0%25B8%25A1%25E0%25B8%25B0%25E0%25B9%2580%25E0%25B8%2582%25E0%25B8%25B7%25E0%25B8%25AD%25E0%25B9%2580%25E0%25B8%2597%25E0%25B8%25A8%25E0%25B9%2580%25E0%25B8%25A5%25E0%25B9%2587%25E0%25B8%2581.png": "ee46c016ff34aa895c1e35e0800d0dda",
"assets/images/recipe/d/Ingredients/06-%25E0%25B8%2594%25E0%25B8%25AD%25E0%25B8%2581%25E0%25B8%2587%25E0%25B8%25B4%25E0%25B9%2589%25E0%25B8%25A7.png": "df53b78722ca66a0516606706ac8a0a2",
"assets/images/recipe/d/Ingredients/07-%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%25A1%25E0%25B8%25B1%25E0%25B8%2599%25E0%25B8%259E%25E0%25B8%25B7%25E0%25B8%258A.png": "c012bd1ac1ec162b73fda2a642b97b2e",
"assets/images/recipe/d/Ingredients/08-%25E0%25B8%259E%25E0%25B8%25A3%25E0%25B8%25B4%25E0%25B8%2581%25E0%25B8%259C%25E0%25B8%25B1%25E0%25B8%2594.png": "ac80e87d02875a45817424df15990638",
"assets/images/recipe/d/Ingredients/09-%25E0%25B8%25A3%25E0%25B8%25B2%25E0%25B8%2581%25E0%25B8%259C%25E0%25B8%25B1%25E0%25B8%2581%25E0%25B8%258A%25E0%25B8%25B5.png": "de52eda12fe588b3711a67516baecfc1",
"assets/images/recipe/d/Ingredients/10-%25E0%25B8%2581%25E0%25B8%25A3%25E0%25B8%25B0%25E0%25B9%2580%25E0%25B8%2597%25E0%25B8%25B5%25E0%25B8%25A2%25E0%25B8%25A1.png": "0b4edf77c4cfef40bc1f23dc34eea241",
"assets/images/recipe/d/Ingredients/11-%25E0%25B8%25AB%25E0%25B8%25AD%25E0%25B8%25A1%25E0%25B9%2581%25E0%25B8%2582%25E0%25B8%2581%25E0%25B8%258B%25E0%25B8%25AD%25E0%25B8%25A2.png": "a88d075de17932d94fc1f55feaf94d72",
"assets/images/recipe/d/Ingredients/12-%25E0%25B8%2595%25E0%25B9%2589%25E0%25B8%2599%25E0%25B8%25AB%25E0%25B8%25AD%25E0%25B8%25A1%25E0%25B8%259C%25E0%25B8%25B1%25E0%25B8%2581%25E0%25B8%258A%25E0%25B8%25B5.png": "55fbfe2240846dc72b92d5abd28d49c7",
"assets/images/recipe/d/Ingredients/13-%25E0%25B8%2581%25E0%25B8%25B0%25E0%25B8%259B%25E0%25B8%25B4.png": "0e13e56076becd0e4d5da1da67db462a",
"assets/images/recipe/d/Ingredients/14-%25E0%25B9%2580%25E0%25B8%2581%25E0%25B8%25A5%25E0%25B8%25B7%25E0%25B8%25AD.png": "4051cd3d69806dddc11d20483fa13495",
"assets/images/recipe/d/Ingredients/15-%25E0%25B9%2580%25E0%25B8%2595%25E0%25B9%2589%25E0%25B8%25B2%25E0%25B9%2580%25E0%25B8%2588%25E0%25B8%25B5%25E0%25B9%2589%25E0%25B8%25A2%25E0%25B8%25A7.png": "100ed3579fcbb80bbde6d2304f0df953",
"assets/images/recipe/d/Ingredients/16-%25E0%25B8%2595%25E0%25B8%25B0%25E0%25B9%2584%25E0%25B8%2584%25E0%25B8%25A3%25E0%25B9%2589.png": "9137017d77a9b0bef14cc47416ac1a9a",
"assets/images/recipe/d/Ingredients/17-%25E0%25B8%2596%25E0%25B8%25B1%25E0%25B9%2588%25E0%25B8%25A7%25E0%25B9%2580%25E0%25B8%2599%25E0%25B9%2588%25E0%25B8%25B2.png": "5c61be4b3218dfe23831d220f7d9aa47",
"assets/images/recipe/d/Ingredients/18-%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%259B%25E0%25B8%25A5%25E0%25B8%25B2.png": "aa5f6ecabc5b5b13193c0fa03b79c477",
"assets/images/recipe/d/Ingredients/19-%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%25AA%25E0%25B8%25B0%25E0%25B8%25AD%25E0%25B8%25B2%25E0%25B8%2594.png": "4eddd64738e3a8de05f0a70c097bee86",
"assets/images/recipe/e/01.jpg": "8c58f41b7bd42cddc2d7bdfb05f91663",
"assets/images/recipe/e/02.jpg": "b881b883d04159bc8373da84721d0351",
"assets/images/recipe/e/03.jpg": "90d0d70a3107cca599c3068c2efb2441",
"assets/images/recipe/e/04.jpg": "fe2df189697e8c82480702ea43f058ad",
"assets/images/recipe/e/05.jpg": "bbc3e4c0167df656600e840b0e2a9bb4",
"assets/images/recipe/e/Cover.png": "b0b2a38d02a93eb0a8bb16279b299e67",
"assets/images/recipe/e/Description.png": "1e16cd92fe6d9b201b2208705d36745d",
"assets/images/recipe/e/Ingredients/01-%25E0%25B8%259E%25E0%25B8%25A3%25E0%25B8%25B4%25E0%25B8%2581%25E0%25B8%25AB%25E0%25B8%2599%25E0%25B8%25B8%25E0%25B9%2588%25E0%25B8%25A1.png": "8eea30bb82fd67c094a05032935bb150",
"assets/images/recipe/e/Ingredients/02-%25E0%25B8%25AB%25E0%25B8%25AD%25E0%25B8%25A1%25E0%25B9%2581%25E0%25B8%2582%25E0%25B8%2581%25E0%25B8%258B%25E0%25B8%25AD%25E0%25B8%25A2.png": "a88d075de17932d94fc1f55feaf94d72",
"assets/images/recipe/e/Ingredients/03-%25E0%25B8%2581%25E0%25B8%25A3%25E0%25B8%25B0%25E0%25B9%2580%25E0%25B8%2597%25E0%25B8%25B5%25E0%25B8%25A2%25E0%25B8%25A1.png": "0b4edf77c4cfef40bc1f23dc34eea241",
"assets/images/recipe/e/Ingredients/04-%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%259B%25E0%25B8%25A5%25E0%25B8%25B2.png": "aa5f6ecabc5b5b13193c0fa03b79c477",
"assets/images/recipe/e/Ingredients/05-%25E0%25B9%2580%25E0%25B8%2581%25E0%25B8%25A5%25E0%25B8%25B7%25E0%25B8%25AD.png": "4051cd3d69806dddc11d20483fa13495",
"assets/images/recipe/e/Ingredients/06-%25E0%25B8%25A1%25E0%25B8%25B0%25E0%25B8%2599%25E0%25B8%25B2%25E0%25B8%25A7.png": "61796f1e903bdda6c7c9fe2868b3dd95",
"assets/images/recipe/Intro.png": "8592bcbce5b302fdc1e6a991d4490fee",
"assets/images/recipe/r1.png": "956d81a0769cb443a2e673d039c62690",
"assets/images/recipe/s2.png": "1775a3a35e4a9ffc5c2e39fefaedf507",
"assets/images/recipe/sausage1.png": "f4ffdc41dd38cb711b32e29138a1c374",
"assets/NOTICES": "bafeddd2469c83de01ed49406807c923",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_beautiful_popup/img/bg/authentication.png": "f35a4b18ce208c1a061b5b8e37f5c831",
"assets/packages/flutter_beautiful_popup/img/bg/camera.png": "91b3327967e4e02747721a5f0d2fee9f",
"assets/packages/flutter_beautiful_popup/img/bg/coin.png": "cabd80db0d1f5aff7e881cb4267e2468",
"assets/packages/flutter_beautiful_popup/img/bg/fail.png": "8cc3ffefbf01c756932d25b62e6031ba",
"assets/packages/flutter_beautiful_popup/img/bg/geolocation.png": "60467d11beb395f49687f6767093eeca",
"assets/packages/flutter_beautiful_popup/img/bg/gift.png": "9a75d6e641acc3d583c8a175d188a101",
"assets/packages/flutter_beautiful_popup/img/bg/notification.png": "b59cdd09d90f87673ddab1e97ec3e1cf",
"assets/packages/flutter_beautiful_popup/img/bg/red_packet.png": "3b9fb0d40d45c496eb6fdac6095c442e",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_blue.png": "d25afc3a9c26c2cbdd3f7d11e09958be",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_green.png": "a6a384e73842482c3ab7424f78358cec",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_orange.png": "19fd0b66488935b9ec95b58a604c4f4e",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_orange_2.png": "18b4c81e68a42ae97f7ade84cd6a893a",
"assets/packages/flutter_beautiful_popup/img/bg/success.png": "a7bf30ab41d44b9c52512b3cb5d813f3",
"assets/packages/flutter_beautiful_popup/img/bg/term.png": "b926bcb493dd4f2149ddc1e6332aa978",
"assets/packages/flutter_beautiful_popup/img/bg/thumb.png": "5b4693a8b6ff65d3dc619415e2bee11e",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "e766963327e0a89f9ec2ba88646b6177",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "13685372945d816a2b474fc082fd9aaa",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "db78b9359171f24936b16d84f63af378",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "1ab236ed440ee51810c56bd16628aef0",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "6a2ddad1092a0a1c326b6d0e738e682b",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1e68c0b0e1bccf8ab8822eaf3658911f",
"/": "1e68c0b0e1bccf8ab8822eaf3658911f",
"main.dart.js": "60cb7e0b7bbc1cbc2a1aca2ef5f96749",
"manifest.json": "bea5b463a6a2079e683f9b2e96c99d37",
"splash/img/dark-1x.png": "626b197d4078a5df10a9d1eed2196fdf",
"splash/img/dark-2x.png": "2ab6b2e96d710e46f826aad6c4be6fd0",
"splash/img/dark-3x.png": "d82394d703667eba6d85a88938492d4f",
"splash/img/dark-4x.png": "673b0a79f5a2682ee55f3543007a6fe5",
"splash/img/light-1x.png": "626b197d4078a5df10a9d1eed2196fdf",
"splash/img/light-2x.png": "2ab6b2e96d710e46f826aad6c4be6fd0",
"splash/img/light-3x.png": "d82394d703667eba6d85a88938492d4f",
"splash/img/light-4x.png": "673b0a79f5a2682ee55f3543007a6fe5",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "66c88cf86d54f0c2d3377db9f29f3860",
"version.json": "67bfbc665e0a835aef4845b1fee5853e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

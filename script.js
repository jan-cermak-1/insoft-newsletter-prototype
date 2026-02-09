// ===== STATE =====
const state = {
  device: 'desktop', // 'desktop' | 'mobile'
  theme: 'light',    // 'light' | 'dark'
  client: 'gmail',   // 'gmail' | 'outlook' | 'applemail'
  version: '1'
};

// ===== SVG LOGOS =====
// Header logo (182.542 x 80) - uses --fill-0 CSS var, default blue #006D93, O is orange #E9530E
const LOGO_HEADER = `<svg preserveAspectRatio="xMinYMid meet" width="182.542" height="80" overflow="visible" viewBox="0 0 182.542 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g>
<g>
<path d="M28.904 53.289C28.296 53.289 27.7809 53.0722 27.3594 52.638C26.9253 52.216 26.709 51.702 26.709 51.094V28.9038C26.709 28.2963 26.9253 27.7817 27.3594 27.3597C27.7809 26.9261 28.2954 26.7087 28.904 26.7087C29.5115 26.7087 30.0261 26.9261 30.4476 27.3597C30.8817 27.7817 31.0991 28.2963 31.0991 28.9038V51.094C31.0991 51.7015 30.8817 52.216 30.4476 52.638C30.0261 53.0727 29.5115 53.289 28.904 53.289Z" fill="var(--email-logo-fill, #006D93)"/>
<path d="M54.7701 52.4524H54.7519V52.4343L41.3787 35.229V51.0949C41.3787 51.7024 41.1613 52.2169 40.7272 52.639C40.3057 53.0731 39.7912 53.29 39.1837 53.29C38.5762 53.29 38.0617 53.0731 37.6402 52.639C37.206 52.2169 36.9886 51.703 36.9886 51.0949V28.8117C36.9886 28.3407 37.1251 27.9192 37.398 27.5466C37.6699 27.1625 38.0297 26.8957 38.476 26.7471C38.9102 26.5859 39.3564 26.5738 39.8154 26.7102C40.2622 26.8467 40.6281 27.1009 40.9137 27.4729L54.2858 44.6969V28.8117C54.2858 28.2042 54.4977 27.6897 54.9186 27.2677C55.3528 26.834 55.8728 26.6167 56.4814 26.6167C57.0889 26.6167 57.6034 26.834 58.0249 27.2677C58.4591 27.6897 58.6764 28.2042 58.6764 28.8117V51.1318C58.6764 51.1565 58.6698 51.194 58.6583 51.2435C58.6583 51.293 58.6583 51.3238 58.6583 51.3365C58.6583 51.3612 58.6517 51.3981 58.639 51.4476C58.639 51.4977 58.6324 51.5346 58.6209 51.5593L58.6027 51.6523C58.5901 51.7145 58.5768 51.7519 58.5653 51.764C58.5653 51.7762 58.5526 51.8075 58.5279 51.857C58.5163 51.9066 58.5031 51.9434 58.4916 51.9682L58.4541 52.0617L58.398 52.1547C58.3865 52.1795 58.3666 52.2164 58.3419 52.2659L58.2858 52.322C58.2742 52.3473 58.2494 52.3842 58.2115 52.4337L58.1553 52.508C58.1438 52.5201 58.119 52.5449 58.0811 52.5829C58.0436 52.6324 58.0189 52.6571 58.0068 52.6571C58.0068 52.6692 57.982 52.694 57.9325 52.732C57.8951 52.7688 57.8637 52.7936 57.8389 52.8063C57.8764 52.7815 57.8703 52.7876 57.8208 52.825L57.8015 52.8431C57.7025 52.918 57.6089 52.9796 57.5231 53.0291H57.5049C57.4048 53.0792 57.3063 53.1221 57.2072 53.1595C57.1566 53.1843 57.145 53.1909 57.1698 53.1777C57.0708 53.2151 56.9657 53.2399 56.8539 53.2525L56.7978 53.2707C56.6861 53.2833 56.5805 53.2894 56.482 53.2894C56.4066 53.2894 56.3262 53.2833 56.2404 53.2707C56.2652 53.2833 56.252 53.2833 56.203 53.2707C56.1287 53.2591 56.0665 53.2459 56.017 53.2338C56.0285 53.2459 56.0043 53.2404 55.9427 53.2157C55.8805 53.2036 55.831 53.1909 55.7936 53.1782C55.782 53.1782 55.7573 53.1667 55.7193 53.1414C55.6571 53.1293 55.6076 53.1106 55.5707 53.0852C55.5449 53.0852 55.5201 53.0737 55.4953 53.0484C55.4458 53.0236 55.4029 53.0049 55.3655 52.9922C55.3292 52.9675 55.3033 52.9493 55.2912 52.9361C55.2538 52.9114 55.2108 52.8805 55.1613 52.8431C55.1239 52.8184 55.0991 52.8002 55.087 52.787C55.0248 52.738 54.9687 52.6879 54.9192 52.6384L54.901 52.6197V52.601C54.8504 52.5515 54.8257 52.5267 54.8257 52.5267C54.8257 52.5267 54.808 52.5025 54.7701 52.4524Z" fill="var(--email-logo-fill, #006D93)"/>
<path d="M81.5226 45.3473C81.4235 47.5671 80.537 49.4457 78.8637 50.9832C77.1765 52.5207 75.1675 53.2894 72.8366 53.2894C70.8149 53.2894 69.005 52.8558 67.4059 51.9874C65.4833 50.9458 64.2622 49.4331 63.7411 47.4488C63.5926 46.8661 63.6668 46.3141 63.9645 45.7936C64.2738 45.273 64.7212 44.9379 65.3039 44.7893C65.8866 44.6408 66.4386 44.7145 66.9591 45.0122C67.4802 45.322 67.8148 45.7688 67.9639 46.3516C68.1873 47.183 68.7948 47.8334 69.7864 48.305C70.6795 48.7139 71.6964 48.9186 72.8366 48.9186C74.0026 48.9186 75.0002 48.5532 75.8317 47.8213C76.6741 47.1021 77.1204 46.2091 77.171 45.1426C77.1958 44.4983 76.9658 43.9216 76.4821 43.4126C75.7139 42.5943 74.4241 42.1728 72.6142 42.148H72.595C72.5455 42.148 72.5328 42.148 72.5587 42.148C72.546 42.148 72.5328 42.148 72.5212 42.148C69.4832 42.0985 67.1583 41.2241 65.546 39.5249C64.2188 38.1118 63.5997 36.4682 63.6856 34.5961C63.7857 32.3637 64.6722 30.4796 66.3456 28.9416C68.02 27.4041 70.0285 26.6354 72.3727 26.6354C74.3933 26.6354 76.2042 27.0695 77.8033 27.9373C79.7248 28.979 80.947 30.4922 81.4681 32.4759C81.6167 33.0592 81.5358 33.6106 81.2265 34.1312C80.9288 34.6523 80.4881 34.9874 79.9059 35.1354C79.322 35.2845 78.7712 35.2102 78.2496 34.9125C77.7296 34.6033 77.3939 34.1565 77.2459 33.5732C77.0225 32.7423 76.4089 32.0919 75.4047 31.6203C74.5231 31.2109 73.5128 31.0062 72.3727 31.0062C71.2067 31.0062 70.2019 31.3721 69.3588 32.104C68.5279 32.8353 68.0872 33.7284 68.0382 34.7821C68.0134 35.4271 68.2434 36.0092 68.726 36.5303C69.4953 37.337 70.7851 37.7525 72.595 37.7773H72.6885C75.726 37.8268 78.0515 38.7067 79.6638 40.4185C80.9899 41.8201 81.6101 43.4626 81.5226 45.3473Z" fill="var(--email-logo-fill, #006D93)"/>
<path d="M97.9729 53.2892C94.29 53.2892 91.1474 51.9812 88.5429 49.3647C85.9258 46.7608 84.6179 43.6171 84.6179 39.9341C84.6179 36.2512 85.9258 33.1014 88.5429 30.4849C91.1468 27.881 94.2894 26.5785 97.9729 26.5785C101.656 26.5785 104.805 27.8804 107.422 30.4849C110.026 33.1014 111.328 36.2512 111.328 39.9341C111.328 43.6165 110.027 46.7602 107.422 49.3647C104.805 51.9812 101.656 53.2892 97.9729 53.2892ZM97.9729 32.8538C96.0233 32.8538 94.3587 33.5449 92.9787 34.9261C91.5881 36.3161 90.8926 37.9862 90.8926 39.9352C90.8926 41.8843 91.5881 43.5489 92.9787 44.9295C94.3587 46.32 96.0233 47.0156 97.9729 47.0156C99.9214 47.0156 101.592 46.32 102.983 44.9295C104.364 43.5489 105.054 41.8843 105.054 39.9352C105.054 37.9862 104.364 36.3167 102.983 34.9261C101.592 33.5444 99.9214 32.8538 97.9729 32.8538Z" fill="#E9530E"/>
<path d="M131.756 26.6167C132.363 26.6167 132.884 26.834 133.318 27.2676C133.74 27.7018 133.95 28.2224 133.95 28.8304C133.95 29.4379 133.733 29.9524 133.299 30.3739C132.877 30.8081 132.363 31.0254 131.755 31.0254H131.737L120.502 30.9886V37.7404H128.611C129.219 37.7404 129.74 37.9517 130.174 38.3727C130.608 38.8068 130.826 39.3274 130.826 39.9354C130.826 40.5435 130.608 41.064 130.174 41.4976C129.74 41.9197 129.219 42.1299 128.611 42.1299H120.502V51.0955C120.502 51.703 120.284 52.2175 119.851 52.6395C119.417 53.0737 118.896 53.2905 118.288 53.2905C117.681 53.2905 117.166 53.0737 116.745 52.6395C116.311 52.2175 116.093 51.7035 116.093 51.0955V28.7935C116.093 28.1739 116.311 27.6534 116.745 27.2313C117.166 26.7972 117.681 26.5798 118.288 26.5798H118.307L131.756 26.6167Z" fill="var(--email-logo-fill, #006D93)"/>
<path d="M143.725 30.9691H138.2C137.592 30.9691 137.072 30.7523 136.638 30.3182C136.216 29.8961 136.006 29.3821 136.006 28.7741C136.006 28.166 136.217 27.6521 136.638 27.23C137.072 26.7959 137.592 26.5785 138.2 26.5785H153.658C154.252 26.5785 154.767 26.7959 155.201 27.23C155.623 27.6521 155.833 28.166 155.833 28.7741C155.833 29.3821 155.622 29.8961 155.201 30.3182C154.767 30.7523 154.252 30.9691 153.658 30.9691H148.114V51.0947C148.114 51.7022 147.897 52.2233 147.464 52.6569C147.041 53.079 146.527 53.2892 145.919 53.2892C145.312 53.2892 144.797 53.0784 144.376 52.6569C143.941 52.2233 143.724 51.7028 143.724 51.0947V30.9691H143.725Z" fill="var(--email-logo-fill, #006D93)"/>
<path d="M106.549 55.7048H90.2251V61.7627H106.549V55.7048Z" fill="#E9530E"/>
</g>
</g>
</svg>`;

// Footer logo (88.078 x 24) - white
const LOGO_FOOTER = `<svg preserveAspectRatio="none" width="88.078" height="24" overflow="visible" viewBox="0 0 88.078 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="M1.49727 18.2199C1.08251 18.2199 0.731186 18.072 0.443667 17.7758C0.147515 17.4879 0 17.1374 0 16.7226V1.58621C0 1.17182 0.147515 0.820868 0.443667 0.532974C0.731186 0.237198 1.08214 0.0889288 1.49727 0.0889288C1.91166 0.0889288 2.26262 0.237198 2.55014 0.532974C2.84629 0.820868 2.99455 1.17182 2.99455 1.58621V16.7226C2.99455 17.137 2.84629 17.4879 2.55014 17.7758C2.26262 18.0724 1.91166 18.2199 1.49727 18.2199Z" fill="white"/>
<path d="M19.141 17.649H19.1286V17.6366L10.0065 5.90054V16.723C10.0065 17.1374 9.85822 17.4884 9.56207 17.7763C9.27455 18.0724 8.92359 18.2203 8.50921 18.2203C8.09482 18.2203 7.74387 18.0724 7.45635 17.7763C7.1602 17.4884 7.01193 17.1378 7.01193 16.723V1.5232C7.01193 1.2019 7.10502 0.914381 7.2912 0.660268C7.47662 0.398273 7.7221 0.216227 8.02651 0.114882C8.32266 0.0049042 8.62707 -0.00334829 8.94011 0.0897387C9.2449 0.182826 9.49451 0.356233 9.68932 0.60997L18.8107 12.3588V1.5232C18.8107 1.10882 18.9552 0.757864 19.2424 0.469969C19.5385 0.174193 19.8932 0.025924 20.3084 0.025924C20.7228 0.025924 21.0737 0.174193 21.3612 0.469969C21.6574 0.757864 21.8056 1.10882 21.8056 1.5232V16.7482C21.8056 16.7651 21.8011 16.7906 21.7933 16.8244C21.7933 16.8582 21.7933 16.8792 21.7933 16.8878C21.7933 16.9047 21.7887 16.9299 21.7801 16.9636C21.7801 16.9978 21.7756 17.0229 21.7677 17.0398L21.7553 17.1033C21.7467 17.1457 21.7377 17.1712 21.7298 17.1795C21.7298 17.1877 21.7212 17.2091 21.7043 17.2429C21.6964 17.2767 21.6874 17.3018 21.6795 17.3187L21.654 17.3825L21.6157 17.446C21.6078 17.4629 21.5943 17.488 21.5774 17.5218L21.5391 17.5601C21.5313 17.5773 21.5144 17.6025 21.4885 17.6363L21.4502 17.6869C21.4423 17.6952 21.4254 17.7121 21.3995 17.738C21.374 17.7718 21.3571 17.7887 21.3488 17.7887C21.3488 17.7969 21.3319 17.8138 21.2982 17.8397C21.2726 17.8649 21.2512 17.8817 21.2344 17.8904C21.2599 17.8735 21.2557 17.8776 21.222 17.9031L21.2088 17.9155C21.1413 17.9666 21.0775 18.0086 21.0189 18.0424H21.0065C20.9382 18.0766 20.871 18.1058 20.8035 18.1314C20.7689 18.1483 20.761 18.1528 20.7779 18.1437C20.7104 18.1693 20.6387 18.1862 20.5625 18.1948L20.5242 18.2072C20.448 18.2158 20.3759 18.2199 20.3087 18.2199C20.2573 18.2199 20.2025 18.2158 20.144 18.2072C20.1609 18.2158 20.1518 18.2158 20.1184 18.2072C20.0678 18.1993 20.0253 18.1903 19.9916 18.182C19.9995 18.1903 19.9829 18.1865 19.9409 18.1696C19.8985 18.1614 19.8647 18.1528 19.8392 18.1441C19.8313 18.1441 19.8144 18.1362 19.7885 18.119C19.7461 18.1107 19.7123 18.0979 19.6872 18.0807C19.6695 18.0807 19.6526 18.0728 19.6357 18.0555C19.602 18.0386 19.5727 18.0259 19.5472 18.0172C19.5224 18.0004 19.5047 17.988 19.4965 17.979C19.471 17.9621 19.4417 17.9411 19.4079 17.9155C19.3824 17.8986 19.3655 17.8863 19.3572 17.8772C19.3148 17.8438 19.2765 17.8097 19.2427 17.7759L19.2304 17.7631V17.7504C19.1958 17.7166 19.1789 17.6997 19.1789 17.6997C19.1789 17.6997 19.1669 17.6832 19.141 17.649Z" fill="white"/>
<path d="M37.3895 12.8024C37.3219 14.3166 36.7172 15.5981 35.5758 16.6468C34.4249 17.6955 33.0545 18.2199 31.4645 18.2199C30.0855 18.2199 28.851 17.9241 27.7602 17.3318C26.4487 16.6213 25.6158 15.5894 25.2604 14.2359C25.159 13.8384 25.2097 13.4619 25.4128 13.1069C25.6237 12.7518 25.9289 12.5232 26.3264 12.4218C26.7239 12.3205 27.1003 12.3708 27.4554 12.5739C27.8109 12.7852 28.0391 13.09 28.1408 13.4875C28.2932 14.0546 28.7076 14.4983 29.384 14.82C29.9932 15.0988 30.6868 15.2385 31.4645 15.2385C32.2599 15.2385 32.9404 14.9892 33.5076 14.49C34.0822 13.9994 34.3866 13.3903 34.4212 12.6628C34.4381 12.2233 34.2812 11.8299 33.9512 11.4827C33.4273 10.9246 32.5474 10.637 31.3129 10.6202H31.2998C31.266 10.6202 31.2573 10.6202 31.275 10.6202C31.2664 10.6202 31.2573 10.6202 31.2495 10.6202C29.1772 10.5864 27.5913 9.98995 26.4915 8.83086C25.5862 7.86696 25.1639 6.74579 25.2225 5.46884C25.2908 3.94604 25.8955 2.66084 27.0369 1.61174C28.1791 0.563005 29.5491 0.0386357 31.1481 0.0386357C32.5264 0.0386357 33.7617 0.334787 34.8525 0.926715C36.1632 1.63725 36.9968 2.66948 37.3523 4.02262C37.4536 4.42049 37.3985 4.79659 37.1875 5.15167C36.9845 5.50713 36.6838 5.73572 36.2867 5.83669C35.8884 5.93841 35.5127 5.88774 35.1569 5.68467C34.8022 5.47373 34.5732 5.16893 34.4722 4.77106C34.3198 4.20428 33.9013 3.76062 33.2163 3.43895C32.615 3.15969 31.9259 3.02006 31.1481 3.02006C30.3528 3.02006 29.6674 3.26966 29.0923 3.76888C28.5255 4.26772 28.2249 4.87692 28.1915 5.59572C28.1746 6.03563 28.3315 6.43275 28.6607 6.78821C29.1854 7.33847 30.0652 7.62186 31.2998 7.63875H31.3636C33.4355 7.67253 35.0217 8.27271 36.1215 9.44043C37.0261 10.3964 37.4491 11.5169 37.3895 12.8024Z" fill="white"/>
<path d="M48.6106 18.2199C46.0984 18.2199 43.9547 17.3277 42.1782 15.5429C40.393 13.7667 39.5008 11.6224 39.5008 9.11014C39.5008 6.59792 40.393 4.44941 42.1782 2.66462C43.9544 0.888455 46.098 0 48.6106 0C51.1232 0 53.2709 0.88808 55.0561 2.66462C56.8323 4.44941 57.7203 6.59792 57.7203 9.11014C57.7203 11.622 56.8326 13.7664 55.0561 15.5429C53.2709 17.3277 51.1228 18.2199 48.6106 18.2199ZM48.6106 4.28051C47.2807 4.28051 46.1453 4.75195 45.2039 5.69408C44.2554 6.64222 43.7809 7.78141 43.7809 9.1109C43.7809 10.4404 44.2554 11.5758 45.2039 12.5176C46.1453 13.4661 47.2807 13.9405 48.6106 13.9405C49.9397 13.9405 51.0789 13.4661 52.0278 12.5176C52.9699 11.5758 53.4406 10.4404 53.4406 9.1109C53.4406 7.78141 52.9699 6.64259 52.0278 5.69408C51.0789 4.75157 49.9397 4.28051 48.6106 4.28051Z" fill="#E9530E"/>
<path d="M71.6545 0.0261425C72.0689 0.0261425 72.4243 0.174411 72.7205 0.470188C73.008 0.76634 73.1514 1.12142 73.1514 1.53618C73.1514 1.95057 73.0031 2.30152 72.707 2.58904C72.4195 2.88519 72.0685 3.03345 71.6541 3.03345H71.6417L63.9778 3.00831V7.61386H69.5097C69.9241 7.61386 70.2796 7.758 70.5757 8.04515C70.8719 8.3413 71.0202 8.69638 71.0202 9.11114C71.0202 9.5259 70.8719 9.88098 70.5757 10.1768C70.2796 10.4647 69.9241 10.608 69.5097 10.608H63.9778V16.7236C63.9778 17.138 63.8296 17.489 63.5342 17.7769C63.238 18.073 62.8825 18.2209 62.4682 18.2209C62.0538 18.2209 61.7028 18.073 61.4153 17.7769C61.1192 17.489 60.9709 17.1384 60.9709 16.7236V1.51103C60.9709 1.08838 61.1192 0.733305 61.4153 0.445411C61.7028 0.149259 62.0538 0.0009992 62.4682 0.0009992H62.4805L71.6545 0.0261425Z" fill="white"/>
<path d="M79.8188 2.99493H76.0506C75.6359 2.99493 75.2808 2.84704 74.9846 2.55089C74.6971 2.263 74.5537 1.91242 74.5537 1.49766C74.5537 1.0829 74.6975 0.732318 74.9846 0.444423C75.2808 0.148272 75.6355 0 76.0506 0H86.5942C86.9996 0 87.3509 0.148272 87.6471 0.444423C87.9346 0.732318 88.078 1.0829 88.078 1.49766C88.078 1.91242 87.9342 2.263 87.6471 2.55089C87.3509 2.84704 86.9996 2.99493 86.5942 2.99493H82.8129V16.723C82.8129 17.1374 82.6647 17.4929 82.3693 17.7886C82.081 18.0765 81.73 18.2199 81.3157 18.2199C80.9013 18.2199 80.5503 18.0762 80.2628 17.7886C79.9666 17.4929 79.8184 17.1378 79.8184 16.723V2.99493H79.8188Z" fill="white"/>
<path d="M54.4608 19.8678H43.3257V24H54.4608V19.8678Z" fill="#E9530E"/>
</g>
</svg>`;

// Tight-cropped logo for V4/V7 (viewBox matches content bounds exactly: 129.124 x 35.184)
const LOGO_HEADER_TIGHT = LOGO_HEADER
  .replace('viewBox="0 0 182.542 80"', 'viewBox="26.709 26.5785 129.124 35.1842"')
  .replace('width="182.542" height="80"', 'width="129.124" height="35.184"');

// ===== EMAIL TEMPLATE =====
function generateEmailHTML(theme, device) {
  const isDark = theme === 'dark';
  const isMobile = device === 'mobile';
  const themeClass = isDark ? 'dark' : '';
  const deviceClass = isMobile ? 'mobile' : 'desktop';

  return `
<div class="email-container ${themeClass}">
  <div class="email-wrapper ${deviceClass}">
    <div class="email-inner">

      <!-- Header Logo -->
      <div class="email-header">
        ${LOGO_HEADER}
      </div>

      <!-- Greeting Card -->
      <div class="email-greeting">
        <p>Dobrý den {name},</p>
        <div class="spacer"></div>
        <p>vítejte u prvního čtvrtletního newsletteru společnosti Insoft. Chceme Vás pravidelně informovat o novinkách, dokončených úpravách a našem směřování. Newsletter je určen výhradně našim zákazníkům a partnerům, se kterými dlouhodobě spolupracujeme.</p>
        <div class="spacer"></div>
        <p>Na úvod děkujeme za Vaši důvěru a partnerství.</p>
      </div>

      <!-- Section: Co jsme dokončili 2025 -->
      <div class="email-section">
        <h2 class="email-section-title">Co jsme pro Vás v roce 2025 dokončili</h2>
        <p class="email-section-intro">V uplynulém roce jsme se zaměřili především na rozvoj Call Intelligence, stabilitu hlasové komunikace a nástroje, které zjednodušují každodenní provoz kontaktních center.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Call Intelligence</strong> s využitím AI Automatické přepisy hovorů, jejich shrnutí, analýza obsahu a možnost fulltextového vyhledávání v historii hovorů. Tyto funkce přinášejí lepší přehled nad komunikací a kvalitní podklady pro datovou analýzu.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>uPhone</strong> – moderní softphone Nová generace telefonu přímo v prohlížeči, která umožňuje plynule pokračovat v hovoru i po jeho zavření a opětovném otevření.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>uAuth</strong> a moderní autentizace Bezpečnější a jednotné přihlašování včetně podpory Single Sign-On a mobilního přístupu.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Rozšířená historie hovorů</strong> a reporting Práci s historií hovorů jsme zpřesnili pomocí fulltextového vyhledávání v přepisech, konfigurovatelných metadat a pokročilého filtrování s vizuální indikací aktivních filtrů. Součástí je také nový reportovací engine s přizpůsobitelnými sloupci, který usnadňuje práci s většími objemy dat.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Nástroje pro supervizory</strong> Supervizorům jsme nově umožnili hromadně měnit stav agentů, řídit odchozí kampaně v reálném čase a přehledně sledovat fronty pomocí diagramového zobrazení. Přibyla také rozšířená správa aktivních hovorů, která zjednodušuje operativní zásahy v provozu.</p>

        <div class="email-divider"></div>
        <p class="email-item">Všechna tato řešení jsou plně dostupná k nasazení a mohou být využívána i zákazníky, kteří je zatím nemají aktivní.</p>
      </div>

      <!-- Section: Kam směřujeme 2026 -->
      <div class="email-section">
        <h2 class="email-section-title">Kam směřujeme v roce 2026</h2>
        <p class="email-section-intro">Plánujeme další rozvoj nejen hlasové komunikace, ale i inteligentních nástrojů pro kontaktní centra a dispečerské provozy:</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>VoiceBot</strong> pro rutinní požadavky a směrování hovorů.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Optimalizace provozu a detekce anomálií pomocí AI.</strong></p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Rozvoj příchozích telefonních front</strong> s férovějším přidělováním hovorů.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Dispečerský mód </strong>přizpůsobený potřebám dispečerských a dealingových pracovišť.</p>

        <div class="email-divider"></div>
        <p class="email-item">O všech projektech Vás budeme pravidelně informovat.</p>
      </div>

      <!-- CTA: Osobní konzultace -->
      <div class="email-cta-card">
        <h2 class="email-section-title">Osobní konzultace</h2>
        <div class="email-cta-text">
          <p>V následujících měsících plánujeme realizovat osobní konzultace se zákazníky. Rádi bychom s Vámi prošli Vaše zkušenosti, aktuální potřeby a možnosti dalšího rozvoje.</p>
          <div class="spacer"></div>
          <p>Pokud máte o osobní setkání zájem, prosíme o vyplnění krátkého dotazníku a výběr termínu v našem kalendáři.</p>
        </div>
        <a class="email-cta-btn" href="#">Zarezervujte si termín →</a>
      </div>

      <!-- News Section -->
      <div class="email-news">
        <div class="email-news-header">
          <div class="email-news-label">Insoft novinky</div>
        </div>
        <div class="email-news-body">
          <div class="email-news-title">
            Call Intelligence:
            <span class="subtitle">Jak využít AI přepisy hovorů</span>
          </div>
          <div class="email-news-cards">

            <div class="email-news-card">
              <div class="email-news-card-title">Proč jsou AI přepisy užitečné?</div>
              <div class="email-news-card-text">
                <p>Hovory se zákazníky obsahují spoustu cenných informací, ale ruční poslech stovek hovorů je časově náročný a často nereálný. AI přepis automaticky převádí hovory do textu a umožní s nimi dále pracovat.</p>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Jak to funguje?</div>
              <div class="email-news-card-text">
                <p>Přepisy nevznikají okamžitě po skončení hovoru – probíhají se zpožděním. Jsou určeny hlavně pro zpětnou analýzu většího množství záznamů a dlouhodobé sledování komunikace, nikoli pro okamžité reakce.</p>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Co umožňují?</div>
              <div class="email-news-card-text">
                <ul>
                  <li><strong>Shrnutí hovoru</strong> – rychlý přehled obsahu bez nutnosti poslechu celého záznamu.</li>
                  <li><strong>Fulltextové vyhledávání</strong> – najdete přesně to, co vás zajímá, napříč stovkami hovorů.</li>
                  <li><strong>Štítkování hovoru</strong> – hovory lze označit podle tématu, typu dotazu nebo problému, což výrazně usnadňuje analýzu trendů.</li>
                </ul>
                <div class="spacer"></div>
                <p>Díky těmto funkcím snadno odhalíte opakující se problémy, nejčastější dotazy zákazníků nebo měnící se témata komunikace.</p>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Na co AI přepisy nestačí?</div>
              <div class="email-news-card-text">
                <p>AI přepisy nenahrazují detailní poslech jednotlivých hovorů. Když je potřeba vnímat tón hlasu nebo konkrétní kontext, je stále nezbytný klasický poslech.</p>
                <div class="spacer"></div>
                <p>Hlavní hodnotou přepisů je přehled, analytika a podklady pro lepší rozhodování a optimalizaci procesů.</p>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Chcete vědět víc?</div>
              <div class="email-news-card-text">
                <p>Podrobnější vysvětlení AI přepisů a příklady jejich využití naleznete v samostatném článku na našem blogu. <a href="#">AI Transkripce hovorů | UCS Documentation</a></p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Sign Off -->
      <div class="email-signoff">Váš tým Insoft</div>

      <!-- Footer -->
      <div class="email-footer">
        <div class="email-footer-logo">${LOGO_FOOTER}</div>
        <div class="email-footer-info">
          Koubkova 13, Praha - Vinohrady<br>
          +420 211 151 657<br>
          <a href="mailto:helpdesk@insoft.cz">helpdesk@insoft.cz</a>
        </div>
        <div class="email-footer-unsubscribe">
          Nepřejete si dále dostávat naše emaily? <a href="#">Odhlásit</a>
        </div>
      </div>

    </div>
  </div>
</div>`;
}

// ===== EMAIL TEMPLATE V2 (marketing-optimized) =====
function generateEmailHTMLv2(theme, device) {
  const isDark = theme === 'dark';
  const isMobile = device === 'mobile';
  const themeClass = isDark ? 'dark' : '';
  const deviceClass = isMobile ? 'mobile' : 'desktop';

  return `
<div class="email-container ${themeClass}">
  <div class="email-wrapper ${deviceClass}">
    <div class="email-inner">

      <!-- Header Logo -->
      <div class="email-header">
        ${LOGO_HEADER}
      </div>

      <!-- Greeting Card - shorter, benefit-driven -->
      <div class="email-greeting">
        <p>Dobrý den {name},</p>
        <div class="spacer"></div>
        <p>v uplynulém roce jsme se zaměřili na rozvoj Call Intelligence, stabilitu hlasové komunikace a nástroje, které zjednodušují každodenní provoz kontaktních center. Přinášíme Vám přehled toho nejdůležitějšího.</p>
      </div>

      <!-- PRIMARY CTA - above the fold -->
      <div class="email-cta-card">
        <h2 class="email-section-title">Naplánujte si osobní konzultaci</h2>
        <div class="email-cta-text">
          <p>Rádi bychom s Vámi prošli Vaše zkušenosti, aktuální potřeby a možnosti dalšího rozvoje. Pokud máte zájem, vyplňte krátký dotazník a vyberte termín v našem kalendáři.</p>
        </div>
        <a class="email-cta-btn" href="#">Vybrat termín konzultace →</a>
      </div>

      <!-- Section: Co jsme dokončili 2025 - shorter, with metrics & links -->
      <div class="email-section">
        <h2 class="email-section-title">5 novinek, které zefektivní Váš provoz</h2>
        <p class="email-section-intro">Všechna řešení jsou připravena k nasazení — i pokud je zatím nevyužíváte.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Call Intelligence s využitím AI</strong> — automatické přepisy hovorů, jejich shrnutí, analýza obsahu a fulltextové vyhledávání v historii hovorů. <a href="#">Zjistit více →</a></p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>uPhone</strong> — moderní softphone přímo v prohlížeči. Umožňuje plynule pokračovat v hovoru i po zavření a opětovném otevření okna. <a href="#">Zjistit více →</a></p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>uAuth</strong> — jednotné přihlášení (SSO) a mobilní přístup. Méně hesel, vyšší bezpečnost. <a href="#">Zjistit více →</a></p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Rozšířená historie hovorů a reporting</strong> — fulltextové vyhledávání v přepisech, konfigurovatelná metadata, pokročilé filtrování s vizuální indikací a nový reportovací engine. <a href="#">Zjistit více →</a></p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Nástroje pro supervizory</strong> — hromadná změna stavů agentů, řízení odchozích kampaní v reálném čase, diagramové zobrazení front a rozšířená správa aktivních hovorů. <a href="#">Zjistit více →</a></p>
      </div>

      <!-- Section: Kam směřujeme 2026 - compact with links -->
      <div class="email-section">
        <h2 class="email-section-title">Co chystáme v roce 2026</h2>

        <div class="email-divider"></div>
        <p class="email-item"><strong>VoiceBot</strong> — pro rutinní požadavky a směrování hovorů. <a href="#">Chci vědět první →</a></p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Optimalizace provozu a detekce anomálií</strong> pomocí AI.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Rozvoj příchozích telefonních front</strong> s férovějším přidělováním hovorů.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Dispečerský mód</strong> — rozhraní přizpůsobené dealingovým a dispečerským pracovištím.</p>
      </div>

      <!-- News Section -->
      <div class="email-news">
        <div class="email-news-header">
          <div class="email-news-label">Insoft novinky</div>
        </div>
        <div class="email-news-body">
          <div class="email-news-title">
            Call Intelligence:
            <span class="subtitle">Jak využít AI přepisy hovorů</span>
          </div>
          <div class="email-news-cards">

            <div class="email-news-card">
              <div class="email-news-card-title">Proč jsou AI přepisy užitečné?</div>
              <div class="email-news-card-text">
                <p>Hovory se zákazníky obsahují cenné informace, ale ruční poslech stovek záznamů je nereálný. AI přepis automaticky převádí hovory do textu a umožní s nimi dále pracovat.</p>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Jak to funguje?</div>
              <div class="email-news-card-text">
                <p>Přepisy probíhají se zpožděním po skončení hovoru. Jsou určeny pro zpětnou analýzu většího množství záznamů a dlouhodobé sledování komunikace.</p>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Co umožňují?</div>
              <div class="email-news-card-text">
                <ul>
                  <li><strong>Shrnutí hovoru</strong> – přehled obsahu bez poslechu celého záznamu.</li>
                  <li><strong>Fulltextové vyhledávání</strong> – najdete přesně to, co vás zajímá, napříč stovkami hovorů.</li>
                  <li><strong>Štítkování hovoru</strong> – označení podle tématu nebo typu dotazu pro snadnou analýzu trendů.</li>
                </ul>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Na co AI přepisy nestačí?</div>
              <div class="email-news-card-text">
                <p>AI přepisy nenahrazují detailní poslech. Když je potřeba vnímat tón hlasu nebo kontext, je stále nezbytný klasický poslech. Hlavní hodnotou přepisů je přehled, analytika a podklady pro rozhodování.</p>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Chcete vědět víc?</div>
              <div class="email-news-card-text">
                <p>Podrobnější vysvětlení a příklady využití naleznete v článku na našem blogu. <a href="#">AI Transkripce hovorů | UCS Documentation</a></p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Secondary CTA - reminder -->
      <div class="email-cta-card">
        <h2 class="email-section-title">Máte zájem o osobní setkání?</h2>
        <div class="email-cta-text">
          <p>V následujících měsících plánujeme osobní konzultace se zákazníky. Pokud máte zájem, ozvěte se nám na <a href="mailto:helpdesk@insoft.cz"><strong>helpdesk@insoft.cz</strong></a> nebo si <a href="#"><strong>zarezervujte termín</strong></a>.</p>
        </div>
      </div>

      <!-- Sign Off -->
      <div class="email-signoff">Váš tým Insoft</div>

      <!-- Footer -->
      <div class="email-footer email-footer-v2">
        <div class="email-footer-logo">${LOGO_FOOTER}</div>
        <div class="email-footer-info">
          Koubkova 13, Praha - Vinohrady<br>
          +420 211 151 657<br>
          <a href="mailto:helpdesk@insoft.cz">helpdesk@insoft.cz</a>
        </div>
        <div class="email-footer-unsubscribe">
          Nepřejete si dále dostávat naše emaily? <a href="#">Odhlásit</a>
        </div>
      </div>

    </div>
  </div>
</div>`;
}

// ===== EMAIL TEMPLATE V3 (design variant — same content as V1) =====
function generateEmailHTMLv3(theme, device) {
  const isDark = theme === 'dark';
  const isMobile = device === 'mobile';
  const themeClass = isDark ? 'dark' : '';
  const deviceClass = isMobile ? 'mobile' : 'desktop';

  return `
<div class="email-container ${themeClass}">
  <div class="email-wrapper ${deviceClass}">
    <div class="email-inner">

      <!-- V3 Header: Blue banner -->
      <div class="email-header-v3">
        ${LOGO_FOOTER.replace('preserveAspectRatio="none"', 'preserveAspectRatio="xMidYMid meet"')}
        <div class="header-v3-title">Newsletter<br>Q1 2026</div>
      </div>

      <!-- Greeting Card -->
      <div class="email-greeting">
        <p>Dobrý den {name},</p>
        <div class="spacer"></div>
        <p>vítejte u prvního čtvrtletního newsletteru společnosti Insoft. Chceme Vás pravidelně informovat o novinkách, dokončených úpravách a našem směřování. Newsletter je určen výhradně našim zákazníkům a partnerům, se kterými dlouhodobě spolupracujeme.</p>
        <div class="spacer"></div>
        <p>Na úvod děkujeme za Vaši důvěru a partnerství.</p>
      </div>

      <!-- Section: Co jsme dokončili 2025 -->
      <div class="email-section">
        <h2 class="email-section-title-v3">Co jsme pro Vás v roce 2025 dokončili</h2>
        <p class="email-section-intro">V uplynulém roce jsme se zaměřili především na rozvoj Call Intelligence, stabilitu hlasové komunikace a nástroje, které zjednodušují každodenní provoz kontaktních center.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Call Intelligence</strong> s využitím AI Automatické přepisy hovorů, jejich shrnutí, analýza obsahu a možnost fulltextového vyhledávání v historii hovorů. Tyto funkce přinášejí lepší přehled nad komunikací a kvalitní podklady pro datovou analýzu.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>uPhone</strong> – moderní softphone Nová generace telefonu přímo v prohlížeči, která umožňuje plynule pokračovat v hovoru i po jeho zavření a opětovném otevření.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>uAuth</strong> a moderní autentizace Bezpečnější a jednotné přihlašování včetně podpory Single Sign-On a mobilního přístupu.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Rozšířená historie hovorů</strong> a reporting Práci s historií hovorů jsme zpřesnili pomocí fulltextového vyhledávání v přepisech, konfigurovatelných metadat a pokročilého filtrování s vizuální indikací aktivních filtrů. Součástí je také nový reportovací engine s přizpůsobitelnými sloupci, který usnadňuje práci s většími objemy dat.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Nástroje pro supervizory</strong> Supervizorům jsme nově umožnili hromadně měnit stav agentů, řídit odchozí kampaně v reálném čase a přehledně sledovat fronty pomocí diagramového zobrazení. Přibyla také rozšířená správa aktivních hovorů, která zjednodušuje operativní zásahy v provozu.</p>

        <div class="email-divider"></div>
        <p class="email-item">Všechna tato řešení jsou plně dostupná k nasazení a mohou být využívána i zákazníky, kteří je zatím nemají aktivní.</p>
      </div>

      <!-- Section: Kam směřujeme 2026 -->
      <div class="email-section">
        <h2 class="email-section-title-v3">Kam směřujeme v roce 2026</h2>
        <p class="email-section-intro">Plánujeme další rozvoj nejen hlasové komunikace, ale i inteligentních nástrojů pro kontaktní centra a dispečerské provozy:</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>VoiceBot</strong> pro rutinní požadavky a směrování hovorů.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Optimalizace provozu a detekce anomálií pomocí AI.</strong></p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Rozvoj příchozích telefonních front</strong> s férovějším přidělováním hovorů.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Dispečerský mód </strong>přizpůsobený potřebám dispečerských a dealingových pracovišť.</p>

        <div class="email-divider"></div>
        <p class="email-item">O všech projektech Vás budeme pravidelně informovat.</p>
      </div>

      <!-- CTA: Osobní konzultace -->
      <div class="email-cta-card">
        <h2 class="email-section-title-v3">Osobní konzultace</h2>
        <div class="email-cta-text">
          <p>V následujících měsících plánujeme realizovat osobní konzultace se zákazníky. Rádi bychom s Vámi prošli Vaše zkušenosti, aktuální potřeby a možnosti dalšího rozvoje.</p>
          <div class="spacer"></div>
          <p>Pokud máte o osobní setkání zájem, prosíme o vyplnění krátkého dotazníku a výběr termínu v našem kalendáři.</p>
        </div>
        <a class="email-cta-btn-v3" href="#">Zarezervujte si termín →</a>
      </div>

      <!-- News Section with V3 left-border accent -->
      <div class="email-news email-news-v3">
        <div class="email-news-header">
          <div class="email-news-label">Insoft novinky</div>
        </div>
        <div class="email-news-body">
          <div class="email-news-title">
            Call Intelligence:
            <span class="subtitle">Jak využít AI přepisy hovorů</span>
          </div>
          <div class="email-news-cards">

            <div class="email-news-card">
              <div class="email-news-card-title">Proč jsou AI přepisy užitečné?</div>
              <div class="email-news-card-text">
                <p>Hovory se zákazníky obsahují spoustu cenných informací, ale ruční poslech stovek hovorů je časově náročný a často nereálný. AI přepis automaticky převádí hovory do textu a umožní s nimi dále pracovat.</p>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Jak to funguje?</div>
              <div class="email-news-card-text">
                <p>Přepisy nevznikají okamžitě po skončení hovoru – probíhají se zpožděním. Jsou určeny hlavně pro zpětnou analýzu většího množství záznamů a dlouhodobé sledování komunikace, nikoli pro okamžité reakce.</p>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Co umožňují?</div>
              <div class="email-news-card-text">
                <ul>
                  <li><strong>Shrnutí hovoru</strong> – rychlý přehled obsahu bez nutnosti poslechu celého záznamu.</li>
                  <li><strong>Fulltextové vyhledávání</strong> – najdete přesně to, co vás zajímá, napříč stovkami hovorů.</li>
                  <li><strong>Štítkování hovoru</strong> – hovory lze označit podle tématu, typu dotazu nebo problému, což výrazně usnadňuje analýzu trendů.</li>
                </ul>
                <div class="spacer"></div>
                <p>Díky těmto funkcím snadno odhalíte opakující se problémy, nejčastější dotazy zákazníků nebo měnící se témata komunikace.</p>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Na co AI přepisy nestačí?</div>
              <div class="email-news-card-text">
                <p>AI přepisy nenahrazují detailní poslech jednotlivých hovorů. Když je potřeba vnímat tón hlasu nebo konkrétní kontext, je stále nezbytný klasický poslech.</p>
                <div class="spacer"></div>
                <p>Hlavní hodnotou přepisů je přehled, analytika a podklady pro lepší rozhodování a optimalizaci procesů.</p>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Chcete vědět víc?</div>
              <div class="email-news-card-text">
                <p>Podrobnější vysvětlení AI přepisů a příklady jejich využití naleznete v samostatném článku na našem blogu. <a href="#">AI Transkripce hovorů | UCS Documentation</a></p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Sign Off -->
      <div class="email-signoff">Váš tým Insoft</div>

      <!-- V3 Footer: Centered, subtle -->
      <div class="email-footer-v3">
        <div class="email-footer-v3-logo">${LOGO_FOOTER}</div>
        <div class="email-footer-v3-info">
          Koubkova 13, Praha - Vinohrady · +420 211 151 657<br>
          <a href="mailto:helpdesk@insoft.cz">helpdesk@insoft.cz</a>
        </div>
        <div class="email-footer-v3-divider"></div>
        <div class="email-footer-v3-unsubscribe">
          Nepřejete si dále dostávat naše emaily? <a href="#">Odhlásit</a>
        </div>
      </div>

    </div>
  </div>
</div>`;
}

// ===== EMAIL TEMPLATE V4-V9 (Figma design variants — shared body, different headers) =====
function generateEmailHTMLv4plus(theme, device, version) {
  const isDark = theme === 'dark';
  const isMobile = device === 'mobile';
  const themeClass = isDark ? 'dark' : '';
  const deviceClass = isMobile ? 'mobile' : 'desktop';

  // Build top section HTML (preheader + header + greeting) per version
  let topSectionHTML = '';
  let innerExtraClass = '';

  const greetingContent = `
        <p>Dobrý den {name},</p>
        <div class="spacer"></div>
        <p>Vítejte u prvního čtvrtletního newsletteru společnosti Insoft. Pravidelně vás budeme informovat o našich novinkách, dokončených projektech a strategickém směřování.</p>
        <div class="spacer"></div>
        <p>Děkujeme za Vaši důvěru a partnerství.</p>`;

  switch(version) {
    case '4':
      // V4: preheader+logo in one wrapper (py-24), greeting separate (p-48, full rounded)
      topSectionHTML = `
      <div class="email-top-v4">
        <div class="email-preheader"><a href="#">Zobrazit email v prohlížeči</a></div>
        <div class="email-header-v4">
          ${LOGO_HEADER_TIGHT}
        </div>
      </div>
      <div class="email-greeting email-greeting-v4">${greetingContent}
      </div>`;
      break;
    case '5':
      // V5: preheader+hero+greeting in one wrapper (pt-24, no gap)
      topSectionHTML = `
      <div class="email-top-v5">
        <div class="email-preheader"><a href="#">Zobrazit email v prohlížeči</a></div>
        <div class="email-header-img">
          <img src="assets/header-v5.png" alt="Insoft">
        </div>
        <div class="email-greeting email-greeting-v5">${greetingContent}
        </div>
      </div>`;
      break;
    case '6':
      // V6: same structure as V5
      topSectionHTML = `
      <div class="email-top-v6">
        <div class="email-preheader"><a href="#">Zobrazit email v prohlížeči</a></div>
        <div class="email-header-img">
          <img src="assets/header-v6.png" alt="Insoft">
        </div>
        <div class="email-greeting email-greeting-v6">${greetingContent}
        </div>
      </div>`;
      break;
    case '7':
      // V7: preheader separate, logo+image header, greeting overlaps with -48px margin
      topSectionHTML = `
      <div class="email-preheader"><a href="#">Zobrazit email v prohlížeči</a></div>
      <div class="email-header-v7">
        <div class="email-header-v7-logo">${LOGO_HEADER_TIGHT}</div>
        <div class="email-header-v7-img">
          <img src="assets/header-v7-notebook.png" alt="">
          <div class="email-header-v7-shadow"></div>
        </div>
      </div>
      <div class="email-greeting email-greeting-v7">${greetingContent}
      </div>`;
      break;
    case '8':
      // V8: preheader separate, image+greeting in one wrapper (bg #f4f5f3)
      topSectionHTML = `
      <div class="email-preheader"><a href="#">Zobrazit email v prohlížeči</a></div>
      <div class="email-top-v8">
        <div class="email-header-img">
          <img src="assets/header-v8.png" alt="Insoft">
        </div>
        <div class="email-greeting email-greeting-v8">${greetingContent}
        </div>
      </div>`;
      innerExtraClass = ' email-inner-v8';
      break;
    case '9':
      // V9: preheader separate, image+greeting in one wrapper (standard bg)
      topSectionHTML = `
      <div class="email-preheader"><a href="#">Zobrazit email v prohlížeči</a></div>
      <div class="email-top-v9">
        <div class="email-header-img">
          <img src="assets/header-v9.png" alt="Insoft">
        </div>
        <div class="email-greeting email-greeting-v9">${greetingContent}
        </div>
      </div>`;
      break;
  }

  return `
<div class="email-container ${themeClass}">
  <div class="email-wrapper ${deviceClass}">
    <div class="email-inner${innerExtraClass}">

      ${topSectionHTML}

      <!-- Section: Co jsme dokončili 2025 -->
      <div class="email-section email-section-v4">
        <h2 class="email-section-title email-section-title-v4">Co jsme pro Vás v roce 2025 dokončili</h2>
        <p class="email-section-intro">V uplynulém roce jsme se zaměřili především na rozvoj Call Intelligence, stabilitu hlasové komunikace a nástroje, které zjednodušují každodenní provoz kontaktních center.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Call Intelligence</strong> s využitím AI Automatické přepisy hovorů, jejich shrnutí, analýza obsahu a možnost fulltextového vyhledávání v historii hovorů. Tyto funkce přinášejí lepší přehled nad komunikací a kvalitní podklady pro datovou analýzu. <a href="#">Zjistit více →</a></p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>uPhone</strong> – moderní softphone Nová generace telefonu přímo v prohlížeči, která umožňuje plynule pokračovat v hovoru i po jeho zavření a opětovném otevření. <a href="#">Zjistit více →</a></p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>uAuth</strong> a moderní autentizace Bezpečnější a jednotné přihlašování včetně podpory Single Sign-On a mobilního přístupu. <a href="#">Zjistit více →</a></p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Rozšířená historie hovorů</strong> a reporting Práci s historií hovorů jsme zpřesnili pomocí fulltextového vyhledávání v přepisech, konfigurovatelných metadat a pokročilého filtrování s vizuální indikací aktivních filtrů. Součástí je také nový reportovací engine s přizpůsobitelnými sloupci, který usnadňuje práci s většími objemy dat. <a href="#">Zjistit více →</a></p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Nástroje pro supervizory</strong> Supervizorům jsme nově umožnili hromadně měnit stav agentů, řídit odchozí kampaně v reálném čase a přehledně sledovat fronty pomocí diagramového zobrazení. Přibyla také rozšířená správa aktivních hovorů, která zjednodušuje operativní zásahy v provozu. <a href="#">Zjistit více →</a></p>

        <div class="email-divider"></div>
        <p class="email-item">Všechna tato řešení jsou plně dostupná k nasazení a mohou být využívána i zákazníky, kteří je zatím nemají aktivní.</p>
      </div>

      <!-- Section: Kam směřujeme 2026 -->
      <div class="email-section email-section-v4">
        <h2 class="email-section-title email-section-title-v4">Kam směřujeme v roce 2026</h2>
        <p class="email-section-intro">Plánujeme další rozvoj nejen hlasové komunikace, ale i inteligentních nástrojů pro kontaktní centra a dispečerské provozy:</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>VoiceBot</strong> pro rutinní požadavky a směrování hovorů.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Optimalizace provozu a detekce anomálií pomocí AI.</strong></p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Rozvoj příchozích telefonních front</strong> s férovějším přidělováním hovorů.</p>

        <div class="email-divider"></div>
        <p class="email-item"><strong>Dispečerský mód </strong>přizpůsobený potřebám dispečerských a dealingových pracovišť.</p>
      </div>

      <!-- CTA: Osobní konzultace -->
      <div class="email-cta-card">
        <h2 class="email-section-title">Osobní konzultace</h2>
        <div class="email-cta-text">
          <p>Nabízíme osobní konzultace, kde probereme vaše zkušenosti, aktuální potřeby a možnosti rozvoje. Pokud máte zájem, rezervujte si termín v našem online kalendáři.</p>
        </div>
        <a class="email-cta-btn email-cta-btn-pill" href="#">Zarezervujte si termín →</a>
      </div>

      <!-- News Section -->
      <div class="email-news">
        <div class="email-news-header">
          <div class="email-news-label">Insoft novinky</div>
        </div>
        <div class="email-news-body email-news-body-v4">
          <div class="email-news-title email-news-title-v4">
            Call Intelligence:
            <span class="subtitle">Jak využít AI přepisy hovorů</span>
          </div>
          <div class="email-news-cards email-news-cards-v4">

            <div class="email-news-card">
              <div class="email-news-card-title">Proč jsou AI přepisy užitečné?</div>
              <div class="email-news-card-text">
                <p>Hovory se zákazníky obsahují spoustu cenných informací, ale ruční poslech stovek hovorů je časově náročný a často nereálný. AI přepis automaticky převádí hovory do textu a umožní s nimi dále pracovat.</p>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Jak to funguje?</div>
              <div class="email-news-card-text">
                <p>Přepisy nevznikají okamžitě po skončení hovoru – probíhají se zpožděním. Jsou určeny hlavně pro zpětnou analýzu většího množství záznamů a dlouhodobé sledování komunikace, nikoli pro okamžité reakce.</p>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Co umožňují?</div>
              <div class="email-news-card-text">
                <ul>
                  <li><strong>Shrnutí hovoru</strong> – rychlý přehled obsahu bez nutnosti poslechu celého záznamu.</li>
                  <li><strong>Fulltextové vyhledávání</strong> – najdete přesně to, co vás zajímá, napříč stovkami hovorů.</li>
                  <li><strong>Štítkování hovoru</strong> – hovory lze označit podle tématu, typu dotazu nebo problému, což výrazně usnadňuje analýzu trendů.</li>
                </ul>
                <div class="spacer"></div>
                <p>Díky těmto funkcím snadno odhalíte opakující se problémy, nejčastější dotazy zákazníků nebo měnící se témata komunikace.</p>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Na co AI přepisy nestačí?</div>
              <div class="email-news-card-text">
                <p>AI přepisy nenahrazují detailní poslech jednotlivých hovorů. Když je potřeba vnímat tón hlasu nebo konkrétní kontext, je stále nezbytný klasický poslech.</p>
                <div class="spacer"></div>
                <p>Hlavní hodnotou přepisů je přehled, analytika a podklady pro lepší rozhodování a optimalizaci procesů.</p>
              </div>
            </div>

            <div class="email-news-card">
              <div class="email-news-card-title">Chcete vědět víc?</div>
              <div class="email-news-card-text">
                <p>Podrobnější vysvětlení AI přepisů a příklady jejich využití naleznete v samostatném článku na našem blogu. <a href="#">AI Transkripce hovorů | UCS Documentation</a></p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Sign Off -->
      <div class="email-signoff">Váš tým Insoft</div>

      <!-- Footer -->
      <div class="email-footer email-footer-v4">
        <div class="email-footer-logo">${LOGO_FOOTER}</div>
        <div class="email-footer-info">
          Koubkova 13, Praha - Vinohrady<br>
          +420 211 151 657<br>
          <a href="mailto:helpdesk@insoft.cz">helpdesk@insoft.cz</a>
        </div>
        <div class="email-footer-unsubscribe">
          Nepřejete si dále dostávat naše emaily? <a href="#">Odhlásit</a>
        </div>
      </div>

    </div>
  </div>
</div>`;
}

// ===== RENDER =====
function render() {
  const viewports = document.querySelectorAll('.email-viewport');
  const desktopView = document.getElementById('desktop-view');
  const mobileView = document.getElementById('mobile-view');

  // Global dark mode on body
  if (state.theme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  // Body class for mobile mode (hides client switcher via CSS)
  if (state.device === 'mobile') {
    document.body.classList.add('mobile-mode');
  } else {
    document.body.classList.remove('mobile-mode');
  }

  // Show/hide views
  if (state.device === 'desktop') {
    desktopView.style.display = '';
    mobileView.style.display = 'none';
    desktopView.style.animation = 'none';
    desktopView.offsetHeight;
    desktopView.style.animation = '';
  } else {
    desktopView.style.display = 'none';
    mobileView.style.display = '';
    mobileView.style.animation = 'none';
    mobileView.offsetHeight;
    mobileView.style.animation = '';
  }

  // Show only the selected client mockup (desktop)
  document.querySelectorAll('.desktop-view .mockup-section[data-client]').forEach(section => {
    if (section.dataset.client === state.client) {
      section.classList.add('active-client');
    } else {
      section.classList.remove('active-client');
    }
  });

  // Inject email content into visible viewports
  viewports.forEach(vp => {
    const mockup = vp.dataset.mockup;
    const isActiveDesktop = mockup === state.client;
    const isMobileMockup = mockup === 'iphone';

    if ((state.device === 'desktop' && isActiveDesktop) ||
        (state.device === 'mobile' && isMobileMockup)) {
      const device = isMobileMockup ? 'mobile' : 'desktop';
      const vn = state.version;
      const generator = ['4','5','6','7','8','9'].includes(vn) ? (t, d) => generateEmailHTMLv4plus(t, d, vn) : vn === '3' ? generateEmailHTMLv3 : vn === '2' ? generateEmailHTMLv2 : generateEmailHTML;
      vp.innerHTML = generator(state.theme, device);
    } else {
      vp.innerHTML = '';
    }
  });
}

// ===== URL PARAMS SYNC =====
function readStateFromURL() {
  const params = new URLSearchParams(window.location.search);
  const device = params.get('device');
  const theme = params.get('theme');
  const client = params.get('client');
  const version = params.get('version');

  if (device && ['desktop', 'mobile'].includes(device)) state.device = device;
  if (theme && ['light', 'dark'].includes(theme)) state.theme = theme;
  if (client && ['gmail', 'outlook', 'applemail'].includes(client)) state.client = client;
  if (version && ['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(version)) state.version = version;
}

function writeStateToURL() {
  const params = new URLSearchParams();
  params.set('device', state.device);
  params.set('theme', state.theme);
  params.set('client', state.client);
  params.set('version', state.version);
  window.history.replaceState(null, '', '?' + params.toString());
}

function syncUIToState() {
  // Sync toggle buttons
  document.querySelectorAll('#device-toggle .toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === state.device);
  });
  document.querySelectorAll('#client-toggle .toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === state.client);
  });
  document.querySelectorAll('#theme-toggle .toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === state.theme);
  });
  // Sync version select
  const versionSelect = document.getElementById('version-select');
  if (versionSelect) versionSelect.value = state.version;
}

// ===== TOGGLE HANDLERS =====
function setupToggles() {
  // Device toggle
  const deviceToggle = document.getElementById('device-toggle');
  deviceToggle.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      deviceToggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.device = btn.dataset.value;
      writeStateToURL();
      render();
    });
  });

  // Client toggle (Gmail / Outlook / Apple Mail)
  const clientToggle = document.getElementById('client-toggle');
  clientToggle.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      clientToggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.client = btn.dataset.value;
      writeStateToURL();
      render();
    });
  });

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      themeToggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.theme = btn.dataset.value;
      writeStateToURL();
      render();
    });
  });

  // Version selector
  const versionSelect = document.getElementById('version-select');
  versionSelect.addEventListener('change', (e) => {
    state.version = e.target.value;
    writeStateToURL();
    render();
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  readStateFromURL();
  setupToggles();
  syncUIToState();
  render();
  writeStateToURL();
});

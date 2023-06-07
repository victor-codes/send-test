const LogoSvg = ({ min }: { min?: boolean }) => {
  return (
    <div>
      {min ? (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 10 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.73383 0.893761C8.52299 1.13333 9.19941 1.44335 9.77719 1.83793L8.77665 3.8672C8.21297 3.51489 7.607 3.24714 6.94468 3.04985C6.28235 2.85256 5.67638 2.75392 5.1127 2.75392C4.53492 2.75392 4.08397 2.85257 3.75986 3.06395C3.43574 3.27533 3.26663 3.58536 3.26663 4.00812C3.26663 4.43088 3.46392 4.755 3.84441 4.98047C4.23899 5.20595 4.88723 5.45961 5.78912 5.75554C6.64874 6.0092 7.36744 6.26286 7.93112 6.51652C8.49481 6.77017 8.97394 7.15066 9.38261 7.65798C9.79128 8.16529 9.98857 8.84171 9.98857 9.67315C9.98857 10.9133 9.52353 11.8574 8.59345 12.5057C7.66337 13.1539 6.50782 13.4639 5.1127 13.4639C4.15444 13.4639 3.22436 13.3089 2.30837 12.9989C1.39238 12.6889 0.631406 12.252 0.0113525 11.7024L0.983709 9.74361C1.5333 10.2227 2.19563 10.6032 2.9707 10.8851C3.75986 11.1669 4.50674 11.3219 5.23953 11.3219C5.85958 11.3219 6.3669 11.2092 6.74739 10.9837C7.12787 10.7582 7.32516 10.42 7.32516 9.95499C7.32516 9.60269 7.21243 9.32085 6.97286 9.08128C6.73329 8.85581 6.45145 8.67261 6.12733 8.53169C5.78912 8.39077 5.30999 8.23575 4.67584 8.03846C3.83032 7.78481 3.1398 7.53115 2.61839 7.29158C2.08289 7.05202 1.63195 6.68562 1.25146 6.1924C0.870972 5.71326 0.673682 5.06503 0.673682 4.24768C0.673682 3.03576 1.12463 2.11977 2.01243 1.48563C2.90024 0.851484 4.02761 0.541458 5.35227 0.541458C6.15552 0.541458 6.94467 0.654195 7.73383 0.893761Z"
            fill="#0746A6"
          />
        </svg>
      ) : (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 110 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.61672 8.50372C8.29289 8.70898 8.87245 8.97461 9.3675 9.31269L8.51022 11.0514C8.02725 10.7495 7.50806 10.5201 6.94056 10.3511C6.37307 10.182 5.85387 10.0975 5.3709 10.0975C4.87585 10.0975 4.48948 10.182 4.21177 10.3632C3.93406 10.5443 3.78917 10.8099 3.78917 11.1721C3.78917 11.5344 3.95821 11.8121 4.28421 12.0053C4.62229 12.1985 5.17771 12.4158 5.95047 12.6694C6.687 12.8867 7.30279 13.104 7.78576 13.3214C8.26874 13.5387 8.67926 13.8647 9.02942 14.2994C9.37957 14.7341 9.54861 15.3136 9.54861 16.026C9.54861 17.0886 9.15016 17.8975 8.35326 18.4529C7.55635 19.0084 6.56626 19.274 5.3709 19.274C4.54985 19.274 3.75294 19.1412 2.96811 18.8756C2.18328 18.6099 1.53127 18.2356 1 17.7647L1.83313 16.0864C2.30403 16.4969 2.87152 16.8229 3.53561 17.0644C4.21177 17.3059 4.85171 17.4387 5.47957 17.4387C6.01084 17.4387 6.44552 17.3421 6.77152 17.1489C7.09753 16.9557 7.26657 16.666 7.26657 16.2675C7.26657 15.9656 7.16997 15.7242 6.96471 15.5189C6.75945 15.3257 6.51796 15.1687 6.24025 15.048C5.95047 14.9272 5.53994 14.7944 4.9966 14.6254C4.27214 14.4081 3.6805 14.1907 3.23375 13.9855C2.77492 13.7802 2.38855 13.4663 2.06254 13.0437C1.73653 12.6331 1.56749 12.0777 1.56749 11.3774C1.56749 10.339 1.95387 9.55418 2.71455 9.01084C3.47523 8.46749 4.44118 8.20186 5.57616 8.20186C6.2644 8.20186 6.94056 8.29845 7.61672 8.50372Z"
            fill="#0746A6"
          />
          <path
            d="M20.9424 9.68699C21.7997 10.6529 22.2223 12.0173 22.2223 13.7802C22.2223 13.9613 22.2102 14.2511 22.1861 14.6616H13.9514C14.1446 15.5068 14.543 16.1709 15.1347 16.6539C15.7384 17.1368 16.4629 17.3783 17.3201 17.3783C17.9118 17.3783 18.4672 17.2697 18.9985 17.0523C19.5297 16.835 19.9886 16.5211 20.387 16.1105L21.6307 17.4387C21.0873 18.0303 20.4353 18.4771 19.6626 18.791C18.9019 19.105 18.0567 19.274 17.1269 19.274C16.0161 19.274 15.0502 19.0446 14.205 18.5737C13.3718 18.1149 12.7198 17.4629 12.2489 16.6297C11.7901 15.7966 11.5486 14.8427 11.5486 13.7681C11.5486 12.6935 11.778 11.7276 12.2489 10.8944C12.7077 10.0613 13.3598 9.40928 14.205 8.92631C15.0381 8.45541 15.992 8.21393 17.0666 8.21393C18.8053 8.226 20.0852 8.72105 20.9424 9.68699ZM19.252 10.8703C18.7087 10.3632 17.9842 10.1217 17.1028 10.1217C16.2455 10.1217 15.5331 10.3752 14.9656 10.8703C14.3982 11.3774 14.048 12.0656 13.9031 12.935H20.1214C20.0972 12.0656 19.7954 11.3774 19.252 10.8703Z"
            fill="#0746A6"
          />
          <path
            d="M33.5678 9.42136C34.2923 10.17 34.6424 11.1963 34.6424 12.5003V19.274H32.2879V13.1644C32.2879 12.3433 32.0585 11.7034 31.5876 11.2204C31.1288 10.7495 30.4889 10.508 29.6678 10.508C28.7985 10.5201 28.0861 10.7978 27.5307 11.3412C26.9752 11.8845 26.6613 12.5969 26.5768 13.4663V19.2619L24.2223 16.7867V12.5365C24.2223 11.643 26.0335 8.23808 30.1629 8.11734C31.4427 8.09319 32.8554 8.67275 33.5678 9.42136Z"
            fill="#0746A6"
          />
          <path
            d="M48.0044 19.1774H45.662V17.318C45.2635 17.9579 44.7443 18.4409 44.1044 18.779C43.4524 19.117 42.7037 19.274 41.8465 19.274C40.8081 19.274 39.9025 19.0446 39.1177 18.5737C38.3328 18.1028 37.7291 17.4508 37.2945 16.6056C36.8598 15.7604 36.6424 14.7944 36.6424 13.6957C36.6424 12.6211 36.8598 11.6672 37.2945 10.8341C37.7291 10.0009 38.3449 9.34892 39.1177 8.8901C39.9025 8.43127 40.796 8.18979 41.8102 8.18979C42.6796 8.18979 43.4403 8.35883 44.0923 8.70898C44.7322 9.04706 45.2635 9.54211 45.6861 10.182V4L48.0285 6.48731V14.6012V19.1774H48.0044ZM44.3941 16.3279C45.0099 15.6638 45.3239 14.8186 45.3239 13.7802C45.3239 12.7297 45.0099 11.8725 44.3941 11.2084C43.7784 10.5443 42.9694 10.2062 41.9914 10.2062C41.0133 10.2062 40.2164 10.5443 39.5886 11.2084C38.9607 11.8725 38.6468 12.7297 38.6347 13.7802C38.6468 14.8186 38.9607 15.6759 39.5886 16.3279C40.2164 16.992 41.0133 17.318 41.9914 17.318C42.9694 17.318 43.7663 16.992 44.3941 16.3279Z"
            fill="#0746A6"
          />
          <path
            d="M57.8682 9.05808V10.855H54.0565V13.1148H57.7593V14.9118H54.0565V18.5874H52.1778V9.05808H57.8682ZM67.2417 18.5874H65.2133L63.2939 15.2794H61.8645V18.5874H59.9858V9.05808H63.7975C64.6779 9.05808 65.4266 9.36665 66.0437 9.98378C66.6609 10.6009 66.9694 11.3451 66.9694 12.2164C66.9694 12.8063 66.8016 13.3554 66.4658 13.8636C66.13 14.3627 65.6853 14.7394 65.1317 14.9935L67.2417 18.5874ZM63.7975 10.8142H61.8645V13.6322H63.7975C64.1515 13.6322 64.4555 13.496 64.7096 13.2238C64.9638 12.9424 65.0908 12.6066 65.0908 12.2164C65.0908 11.8261 64.9638 11.4949 64.7096 11.2226C64.4555 10.9503 64.1515 10.8142 63.7975 10.8142ZM70.9753 14.6532V16.7904H74.9912V18.5874H69.0966V9.05808H74.9231V10.855H70.9753V12.8834H74.5828V14.6532H70.9753ZM77.0642 18.5874V9.05808H78.9428V18.5874H77.0642ZM86.0296 13.4688H90.8079V14.2039C90.8079 15.5652 90.3722 16.6679 89.501 17.512C88.6297 18.356 87.5044 18.778 86.1249 18.778C84.6546 18.778 83.434 18.3015 82.4629 17.3486C81.5009 16.3866 81.0199 15.2158 81.0199 13.8364C81.0199 12.4478 81.4963 11.2725 82.4493 10.3105C83.4113 9.3485 84.6002 8.86749 86.016 8.86749C86.8963 8.86749 87.704 9.06715 88.4391 9.46648C89.1743 9.8658 89.7506 10.4058 90.168 11.0865L88.5617 12.0122C88.3348 11.6219 87.9899 11.3043 87.527 11.0592C87.0642 10.8142 86.556 10.6917 86.0024 10.6917C85.0857 10.6917 84.337 10.9912 83.7562 11.5902C83.1753 12.171 82.8849 12.9197 82.8849 13.8364C82.8849 14.7348 83.1799 15.479 83.7698 16.0689C84.3597 16.6498 85.1493 16.9402 86.1385 16.9402C86.8555 16.9402 87.4544 16.7814 87.9354 16.4637C88.4165 16.1461 88.7432 15.7014 88.9156 15.1296H86.0296V13.4688ZM98.3109 12.8426V9.05808H100.176V18.5874H98.3109V14.6395H94.7715V18.5874H92.8928V9.05808H94.7715V12.8426H98.3109ZM101.987 9.05808H108.998V10.855H106.425V18.5874H104.546V10.855H101.987V9.05808Z"
            fill="#0746A6"
          />
        </svg>
      )}
    </div>
  );
};

export default LogoSvg;

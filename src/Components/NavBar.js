import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
function NavBar() {
  const [opened, setopened] = useState(false);
  const [search, setsearch] = useState('');

  const handlechange = (event) => {
    setsearch(event.target.value);
  };
  //className=' px-4 py-2 md:p-0 flex justify-around md:justify-center items-center bg-gray-800 backdrop-blur-2xl bg-opacity-50 rounded-full fixed top-12 right-8 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2 z-50 w-[60%] md:w-auto'
  return (
    <>
      <h1 className='fixed top-12 left-8 -translate-y-1/2  z-50 flex items-center text-white font-semibold text-2xl'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className='w-6 h-6 fill-white mt-[2px]'
        >
          <path
            d='M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z'
            clipRule='evenodd'
          />
        </svg>
        tv
      </h1>
      <nav className='w-fit bg-gray-800 backdrop-blur-2xl bg-opacity-50 rounded-full fixed top-12 right-8 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2 z-50 '>
        <ul className='flex items-center justify-around'>
          <ul className='hidden md:flex'>
            <li className='flex items-center align-middle justify-center '>
              <NavLink
                to='/movie'
                end
                className={({ isActive }) =>
                  isActive
                    ? 'duration-100 px-6 py-2 text-gray-800 bg-white rounded-full text-lg font-semibold scale-110 shadow-md'
                    : 'duration-100 px-6 py-2 text-white text-sm font-semibold rounded-full'
                }
              >
                Movies
              </NavLink>
            </li>
            <li className='flex items-center align-middle justify-center '>
              <NavLink
                to='/tv'
                end
                className={({ isActive }) =>
                  isActive
                    ? 'duration-100 px-6 py-2 text-gray-800 bg-white rounded-full text-lg font-semibold scale-110 shadow-md'
                    : 'duration-100 px-6 py-2 text-white text-sm font-semibold rounded-full'
                }
              >
                Tv Shows
              </NavLink>
            </li>

            <li className='flex items-center align-middle justify-center px-6 py-2 text-white text-sm font-semibold'>
              Favourites
            </li>
          </ul>
          <li
            onMouseOver={() => setopened(true)}
            onMouseLeave={() => setopened(false)}
            className='flex align-middle justify-center  px-6 py-2 text-white text-sm font-semibold'
          >
            <input
              onChange={handlechange}
              value={search}
              type='text'
              className={`${
                opened || search !== ''
                  ? 'w-full md:w-[12rem]'
                  : 'w-full md:w-0'
              } duration-150 ease-in-out block bg-transparent outline-none text-white`}
              placeholder='Search...'
            />

            <Link to={`/search?q=${search}`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                className='w-6 h-6 stroke-white'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
      <ul
        className='md:hidden md:p-0 flex justify-between md:justify-center items-center bg-gray-800 backdrop-blur-2xl bg-opacity-50 rounded-full fixed bottom-12 left-1/2 translate-y-1/2 -translate-x-1/2 z-50
  w-[80%] md:w-auto '
      >
        <li className='flex align-middle justify-center '>
          <NavLink
            to='/movie'
            end
            className={({ isActive }) =>
              isActive
                ? 'duration-100 px-4 py-1 text-gray-800 bg-white rounded-full text-lg font-semibold scale-110 shadow-md'
                : 'duration-100 px-4 py-1 text-white text-sm font-semibold rounded-full'
            }
          >
            Movies
          </NavLink>
        </li>
        <li className='flex align-middle justify-center '>
          <NavLink
            to='/tv'
            end
            className={({ isActive }) =>
              isActive
                ? 'duration-100 px-4 py-1 text-gray-800 bg-white rounded-full text-lg font-semibold scale-110 shadow-md'
                : 'duration-100 px-4 py-1 text-white text-sm font-semibold rounded-full'
            }
          >
            Tv Shows
          </NavLink>
        </li>

        <li className='px-4 flex align-middle justify-center text-white text-sm font-semibold'>
          Favourites
        </li>
      </ul>
      {/* <nav class='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
        <div class='container flex flex-wrap justify-between items-center mx-auto'>
          <a href='#' class='flex items-center'>
            <svg
              width='100'
              viewBox='0 0 51 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M26.3363 12.926C25.6923 12.926 25.1071 12.7594 24.5806 12.426C24.0541 12.0927 23.6336 11.5927 23.3192 10.926C23.0048 10.2594 22.8476 9.43173 22.8476 8.44309C22.8476 7.41658 23.0105 6.57188 23.3363 5.909C23.662 5.24612 24.0882 4.75559 24.6147 4.43741C25.145 4.11923 25.7151 3.96014 26.3249 3.96014C26.7832 3.96014 27.1753 4.03968 27.5011 4.19878C27.8268 4.35408 28.0957 4.55484 28.3079 4.80105C28.52 5.04726 28.681 5.30294 28.7908 5.56809H28.8476V1.16468H31.6261V12.801H28.8761V11.3863H28.7908C28.6734 11.6552 28.5067 11.9071 28.2908 12.142C28.0749 12.3768 27.8041 12.5662 27.4783 12.7101C27.1564 12.8541 26.7757 12.926 26.3363 12.926ZM27.3022 10.7613C27.6393 10.7613 27.9272 10.6666 28.1658 10.4772C28.4045 10.284 28.5882 10.0132 28.717 9.66468C28.8457 9.3162 28.9101 8.90711 28.9101 8.43741C28.9101 7.96014 28.8457 7.54915 28.717 7.20446C28.592 6.85976 28.4082 6.59461 28.1658 6.409C27.9272 6.2234 27.6393 6.13059 27.3022 6.13059C26.9575 6.13059 26.6658 6.22529 26.4272 6.41468C26.1886 6.60408 26.0067 6.87112 25.8817 7.21582C25.7605 7.56052 25.6999 7.96772 25.6999 8.43741C25.6999 8.90711 25.7624 9.3162 25.8874 9.66468C26.0124 10.0132 26.1923 10.284 26.4272 10.4772C26.6658 10.6666 26.9575 10.7613 27.3022 10.7613Z'
                fill='white'
              />
              <path
                d='M30.5642 21.426C30.0798 21.426 29.6475 21.2906 29.2673 21.0198C28.8897 20.7464 28.5915 20.3753 28.3728 19.9065C28.1567 19.4378 28.0486 18.9078 28.0486 18.3167C28.0486 17.7307 28.1567 17.2034 28.3728 16.7346C28.5889 16.2633 28.8858 15.8909 29.2634 15.6175C29.6436 15.344 30.0772 15.2073 30.5642 15.2073C30.9236 15.2073 31.253 15.2854 31.5525 15.4417C31.8546 15.5953 32.1072 15.8115 32.3103 16.0901C32.5134 16.3662 32.6449 16.6865 32.7048 17.051H32.4392C32.3585 16.5797 32.1436 16.1969 31.7947 15.9026C31.4483 15.6057 31.0382 15.4573 30.5642 15.4573C30.1345 15.4573 29.7478 15.5823 29.404 15.8323C29.0629 16.0797 28.7934 16.4195 28.5955 16.8518C28.3975 17.2815 28.2986 17.7698 28.2986 18.3167C28.2986 18.8479 28.3936 19.3297 28.5837 19.762C28.7764 20.1943 29.0434 20.538 29.3845 20.7932C29.7257 21.0484 30.1189 21.176 30.5642 21.176C30.8845 21.176 31.1788 21.1096 31.447 20.9768C31.7152 20.8414 31.9379 20.6513 32.115 20.4065C32.2947 20.1617 32.408 19.8766 32.4548 19.551H32.7205C32.6632 19.9287 32.533 20.2581 32.3298 20.5393C32.1267 20.8206 31.8728 21.0393 31.5681 21.1956C31.2634 21.3492 30.9288 21.426 30.5642 21.426Z'
                fill='white'
              />
              <path
                d='M39.9867 17.2698V21.301H39.7367V15.301H39.9867V16.2542H40.0179C40.1585 15.9417 40.389 15.6917 40.7093 15.5042C41.0322 15.3167 41.4007 15.2229 41.8148 15.2229C42.2158 15.2229 42.57 15.3102 42.8773 15.4846C43.1846 15.6591 43.4255 15.9 43.5999 16.2073C43.7744 16.5146 43.8617 16.8688 43.8617 17.2698V21.301H43.6117V17.2698C43.6117 16.7385 43.445 16.3063 43.1117 15.9729C42.7783 15.6396 42.346 15.4729 41.8148 15.4729C41.4606 15.4729 41.1455 15.5497 40.8695 15.7034C40.596 15.857 40.3799 16.0693 40.221 16.3401C40.0648 16.6109 39.9867 16.9208 39.9867 17.2698Z'
                fill='white'
              />
              <path
                d='M48.7128 21.301V15.301H48.9628V16.2542H48.9941C49.1347 15.9417 49.3652 15.6917 49.6855 15.5042C50.0084 15.3167 50.3769 15.2229 50.791 15.2229C50.8222 15.2229 50.843 15.2229 50.8535 15.2229C50.8639 15.2229 50.8847 15.2229 50.916 15.2229V15.4729C50.8847 15.4729 50.8639 15.4729 50.8535 15.4729C50.843 15.4729 50.8222 15.4729 50.791 15.4729C50.4368 15.4729 50.1217 15.5497 49.8456 15.7034C49.5722 15.857 49.3561 16.0693 49.1972 16.3401C49.041 16.6109 48.9628 16.9208 48.9628 17.2698V21.301H48.7128Z'
                fill='white'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M47.3136 15.551V15.301H46.0636V13.8635H45.8136V15.301H44.9386V15.551H45.8136V20.0354C45.8136 20.3167 45.8761 20.5602 46.0011 20.7659C46.1287 20.9716 46.2967 21.1305 46.505 21.2425C46.716 21.3544 46.9438 21.4104 47.1886 21.4104C47.2824 21.4104 47.367 21.4013 47.4425 21.3831C47.518 21.3675 47.5949 21.3453 47.673 21.3167L47.5949 21.0823C47.5272 21.1083 47.4608 21.1279 47.3956 21.1409C47.3331 21.1539 47.2641 21.1604 47.1886 21.1604C46.9907 21.1604 46.8058 21.1162 46.6339 21.0276C46.4621 20.9365 46.324 20.8076 46.2199 20.6409C46.1157 20.4716 46.0636 20.2698 46.0636 20.0354V15.551H47.3136ZM46.0636 15.551V15.301H45.8136V15.551H46.0636Z'
                fill='white'
              />
              <path
                d='M46.0636 15.551V15.301H45.8136V15.551H46.0636Z'
                fill='white'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M34.813 21.0159C35.2063 21.2893 35.6646 21.426 36.188 21.426C36.5787 21.426 36.912 21.3583 37.188 21.2229C37.4641 21.0875 37.6906 20.9274 37.8677 20.7425C38.0448 20.5576 38.1776 20.3896 38.2662 20.2385L38.063 20.0979C37.9901 20.2177 37.8768 20.3622 37.7232 20.5315C37.5721 20.7008 37.3703 20.8505 37.1177 20.9807C36.8677 21.1109 36.5578 21.176 36.188 21.176C35.6854 21.176 35.2583 21.0445 34.9068 20.7815C34.5552 20.5185 34.287 20.1682 34.1021 19.7307C33.9216 19.295 33.8305 18.8185 33.8287 18.301H38.5162V18.051C38.5162 17.663 38.4537 17.2984 38.3287 16.9573C38.2063 16.6135 38.0344 16.3102 37.813 16.0471C37.5917 15.7841 37.3313 15.5784 37.0318 15.43C36.7349 15.2815 36.412 15.2073 36.063 15.2073C35.5917 15.2073 35.1685 15.344 34.7935 15.6175C34.4185 15.8909 34.1216 16.262 33.9029 16.7307C33.6867 17.1995 33.5787 17.7281 33.5787 18.3167C33.5787 18.9052 33.6867 19.4339 33.9029 19.9026C34.119 20.3714 34.4224 20.7425 34.813 21.0159ZM33.8374 18.051H38.2662C38.2662 17.5693 38.1672 17.1331 37.9693 16.7425C37.7714 16.3492 37.5057 16.0367 37.1724 15.805C36.8391 15.5732 36.4693 15.4573 36.063 15.4573C35.6516 15.4573 35.2792 15.5797 34.9458 15.8245C34.6125 16.0693 34.3456 16.4026 34.1451 16.8245C33.9704 17.1919 33.8679 17.6007 33.8374 18.051ZM33.8287 18.2542V18.2854C33.8287 18.2906 33.8287 18.2959 33.8287 18.301H33.7037V18.051H33.8374C33.8329 18.1178 33.83 18.1856 33.8287 18.2542Z'
                fill='white'
              />
              <path
                d='M33.7037 18.051V18.301H33.8287L33.8287 18.2854V18.2542C33.83 18.1856 33.8329 18.1178 33.8374 18.051H33.7037Z'
                fill='white'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M38.7903 12.9488C38.2334 12.9488 37.7391 12.856 37.3073 12.6704C36.8793 12.481 36.5403 12.1969 36.2903 11.8181C36.044 11.4355 35.9209 10.9564 35.9209 10.3806C35.9209 9.89575 36.0062 9.48665 36.1766 9.15332C36.3471 8.81999 36.5819 8.54915 36.8812 8.34082C37.1804 8.13249 37.5251 7.97529 37.9153 7.86923C38.3054 7.75938 38.7221 7.68552 39.1653 7.64764C39.6615 7.60218 40.0611 7.55484 40.3641 7.50559C40.6672 7.45256 40.8868 7.3787 41.0232 7.284C41.1634 7.18552 41.2334 7.04726 41.2334 6.86923V6.84082C41.2334 6.54915 41.1331 6.32378 40.9323 6.16468C40.7315 6.00559 40.4607 5.92605 40.1198 5.92605C39.7524 5.92605 39.4569 6.00559 39.2334 6.16468C39.01 6.32378 38.8679 6.54347 38.8073 6.82378L36.2448 6.73287C36.3206 6.20256 36.5156 5.72908 36.83 5.31241C37.1482 4.89196 37.5838 4.56241 38.1368 4.32378C38.6937 4.08135 39.3622 3.96014 40.1425 3.96014C40.6993 3.96014 41.2126 4.02643 41.6823 4.159C42.152 4.28779 42.5611 4.47718 42.9096 4.72718C43.2581 4.9734 43.527 5.27643 43.7164 5.63628C43.9096 5.99612 44.0062 6.40711 44.0062 6.86923V12.801H41.3925V11.5851H41.3243C41.169 11.8806 40.9702 12.1306 40.7278 12.3351C40.4891 12.5397 40.2069 12.6931 39.8812 12.7954C39.5592 12.8976 39.1956 12.9488 38.7903 12.9488ZM40.455 10.9488C40.2164 11.07 39.9475 11.1306 39.6482 11.1306C39.33 11.1306 39.0668 11.0548 38.8584 10.9033C38.6539 10.7518 38.5516 10.5321 38.5516 10.2442C38.5516 10.0548 38.599 9.89196 38.6937 9.75559C38.7921 9.61544 38.9323 9.50181 39.1141 9.41468C39.2997 9.32756 39.5232 9.26317 39.7846 9.2215C39.9134 9.20256 40.0478 9.18173 40.188 9.159C40.3281 9.13627 40.4645 9.10976 40.5971 9.07946C40.7296 9.04915 40.8509 9.01696 40.9607 8.98287C41.0743 8.94878 41.1709 8.9109 41.2505 8.86923V9.69878C41.2505 9.98287 41.1785 10.2329 41.0346 10.4488C40.8906 10.6609 40.6975 10.8276 40.455 10.9488Z'
                fill='white'
              />
              <path
                d='M32.5832 12.801V4.07378H35.3616V12.801H32.5832Z'
                fill='white'
              />
              <path
                d='M33.9752 3.05673C33.585 3.05673 33.2498 2.92794 32.9695 2.67037C32.6892 2.409 32.5491 2.09461 32.5491 1.72718C32.5491 1.36355 32.6892 1.05294 32.9695 0.795366C33.2498 0.534002 33.585 0.40332 33.9752 0.40332C34.3691 0.40332 34.7044 0.534002 34.9809 0.795366C35.2612 1.05294 35.4013 1.36355 35.4013 1.72718C35.4013 2.09461 35.2612 2.409 34.9809 2.67037C34.7044 2.92794 34.3691 3.05673 33.9752 3.05673Z'
                fill='white'
              />
              <path
                d='M0.295654 12.801V4.07378H2.9377V5.67605H3.03429C3.21611 5.14574 3.52293 4.72718 3.95475 4.42037C4.38656 4.11355 4.90171 3.96014 5.5002 3.96014C6.10626 3.96014 6.6252 4.11544 7.05702 4.42605C7.48884 4.73665 7.76346 5.15332 7.88088 5.67605H7.97179C8.13467 5.15711 8.45285 4.74234 8.92634 4.43173C9.39982 4.11734 9.95853 3.96014 10.6025 3.96014C11.4282 3.96014 12.0987 4.22529 12.6138 4.75559C13.129 5.28211 13.3866 6.00559 13.3866 6.92605V12.801H10.6082V7.56241C10.6082 7.12681 10.4964 6.79537 10.2729 6.56809C10.0494 6.33703 9.75967 6.2215 9.40361 6.2215C9.02103 6.2215 8.7199 6.3465 8.5002 6.5965C8.28429 6.84271 8.17634 7.17415 8.17634 7.59082V12.801H5.50588V7.534C5.50588 7.1287 5.39603 6.80862 5.17634 6.57378C4.95664 6.33893 4.66687 6.2215 4.30702 6.2215C4.06459 6.2215 3.85058 6.28021 3.66497 6.39764C3.47937 6.51128 3.33353 6.67415 3.22747 6.88628C3.1252 7.0984 3.07406 7.3484 3.07406 7.63628V12.801H0.295654Z'
                fill='white'
              />
              <path
                d='M16.0241 12.426C16.6869 12.7859 17.4748 12.9658 18.3877 12.9658C19.1491 12.9658 19.8195 12.8503 20.3991 12.6192C20.9786 12.3844 21.4464 12.0567 21.8025 11.6363C22.1623 11.212 22.3953 10.7139 22.5013 10.142L19.9502 10.0681C19.8782 10.2613 19.7703 10.4242 19.6263 10.5567C19.4824 10.6893 19.31 10.7897 19.1093 10.8579C18.9085 10.926 18.685 10.9601 18.4388 10.9601C18.0828 10.9601 17.776 10.8863 17.5184 10.7385C17.2608 10.5908 17.0619 10.3844 16.9218 10.1192C16.7816 9.85029 16.7116 9.53779 16.7116 9.18173V9.10787V7.53968L16.7126 7.50838L16.7133 7.49423C16.727 7.21333 16.8022 6.96144 16.9388 6.73855C17.0828 6.49991 17.2779 6.31241 17.5241 6.17605C17.7703 6.0359 18.0487 5.96582 18.3593 5.96582C18.6661 5.96582 18.9369 6.03211 19.1718 6.16468C19.4104 6.29347 19.5979 6.4734 19.7343 6.70446C19.8707 6.93552 19.9407 7.19878 19.9445 7.49423H16.7133L16.7126 7.50838L16.7116 7.53968V9.10787H22.5297V8.41468C22.5297 7.69878 22.4256 7.06431 22.2172 6.51128C22.0089 5.95446 21.7172 5.48665 21.3422 5.10787C20.9672 4.72908 20.5222 4.44309 20.007 4.24991C19.4919 4.05673 18.9237 3.96014 18.3025 3.96014C17.4237 3.96014 16.6604 4.14953 16.0127 4.52832C15.365 4.90332 14.8631 5.42984 14.507 6.10787C14.151 6.78211 13.9729 7.56999 13.9729 8.4715C13.9729 9.39953 14.1491 10.2007 14.5013 10.8749C14.8574 11.5454 15.365 12.0624 16.0241 12.426Z'
                fill='white'
              />
            </svg>
          </a>
          <div class='flex md:order-2'>
            <button
              type='button'
              data-collapse-toggle='navbar-search'
              aria-controls='navbar-search'
              aria-expanded='false'
              class='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1'
            >
              <svg
                class='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span class='sr-only'>Search</span>
            </button>
            <div class='hidden relative md:block'>
              <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  class='w-5 h-5 text-gray-500'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span class='sr-only'>Search icon</span>
              </div>
              <input
                type='text'
                id='search-navbar'
                class='block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search...'
              />
            </div>
            <button
              data-collapse-toggle='navbar-search'
              type='button'
              class='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-search'
              aria-expanded='false'
            >
              <span class='sr-only'>Open menu</span>
              <svg
                class='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
          <div
            class='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
            id='navbar-search'
          >
            <div class='relative mt-3 md:hidden'>
              <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  class='w-5 h-5 text-gray-500'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </div>
              <input
                type='text'
                id='search-navbar'
                class='block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search...'
              />
            </div>
            <ul class='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <a
                  href='#'
                  class='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
                  aria-current='page'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}
export default NavBar;

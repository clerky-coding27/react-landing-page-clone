import './app.modules.scss';

export default function App() {
  return (
    <body className="App">
      <header className="App-header">
        <nav>
          <div className="logo">
            <a href="/#">
              <svg
                width="136"
                height="40"
                viewBox="0 0 163 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#0B996E"
                  d="M133.706 29.7211C133.706 22.4541 138.322 17.3432 144.889 17.3432C151.456 17.3432 156.147 22.4511 156.147 29.7211C156.147 36.991 151.457 41.8095 144.889 41.8095C138.321 41.8095 133.706 36.7709 133.706 29.7211ZM126.85 29.7211C126.85 40.4436 134.355 48 144.888 48C155.422 48 163 40.4436 163 29.7211C163 18.9986 155.496 11.1557 144.888 11.1557C134.281 11.1557 126.85 18.8569 126.85 29.7211ZM91.8539 11.5869L105.998 47.5668H112.637L126.78 11.5869H119.636L109.39 39.3641H109.245L98.9983 11.5869H91.8539ZM64.3615 28.4245C64.7938 21.8028 69.196 17.3432 75.1855 17.3432C80.3798 17.3432 84.2771 20.654 84.8545 25.6202H72.8756C68.6185 25.6202 66.3086 26.1238 64.5792 28.4275H64.3615V28.4255V28.4245ZM57.5073 29.504C57.5073 40.2265 65.0841 47.997 75.5453 47.997C82.6172 47.997 88.8213 44.3997 91.491 38.7128L85.7192 35.8332C83.6996 39.5752 79.8023 41.8065 75.5453 41.8065C70.4205 41.8065 65.8037 37.9198 65.8037 34.1777C65.8037 32.2359 67.1028 31.3705 68.9783 31.3705H91.8508V29.4286C91.8508 18.6337 84.9241 11.1497 74.9678 11.1497C65.0115 11.1497 57.5063 18.8508 57.5063 29.501M37.881 47.5628H44.3754V25.4745C44.3754 20.7254 47.3323 17.3422 51.4473 17.3422C53.1797 17.3422 54.9817 17.9181 55.8494 18.7081C56.4995 16.9803 57.5093 15.2556 59.0241 13.5278C57.2916 12.0895 54.3347 11.1517 51.4473 11.1517C43.5107 11.1517 37.881 17.0527 37.881 25.4715V47.5648V47.5628ZM6.4944 23.7487V6.18745H17.1733C20.7803 6.18745 23.1628 8.27406 23.1628 11.4402C23.1628 15.0374 20.0607 17.7723 13.7114 19.859C9.38181 21.2249 7.4347 22.3767 6.71209 23.7457L6.4944 23.7477V23.7487ZM6.4944 41.3793V34.04C6.4944 30.8016 9.23668 27.6355 13.0614 26.4113C16.4537 25.2594 19.2655 24.1075 21.648 22.8863C24.8226 24.7589 26.7698 27.9943 26.7698 31.3775C26.7698 37.1338 21.2852 41.3793 13.8535 41.3793H6.4944ZM0 47.5668H14.431C25.4001 47.5668 33.624 40.7311 33.624 31.664C33.624 26.6977 31.0994 22.238 26.6246 19.3584C28.9346 17.0547 30.017 14.3922 30.017 11.1537C30.017 4.46269 25.1824 0 17.8959 0H0V47.5668Z"
                />
              </svg>
            </a>
          </div>
          <div className="navlist">
            <ul>
              <li>
                <a href="/#">
                  Products{' '}
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dist_marketing-link-iconSm__7vk6N dist_marketing-link-endIcon__zI5Q3"
                  >
                    <path
                      d="M8.98781 9.33325C8.98781 4.95499 5.41045 1.41353 0.987793 1.41353M8.98778 9.25297C8.98778 4.87471 12.5651 1.33325 16.9878 1.33325"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/#">
                  Features{' '}
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dist_marketing-link-iconSm__7vk6N dist_marketing-link-endIcon__zI5Q3"
                  >
                    <path
                      d="M8.98781 9.33325C8.98781 4.95499 5.41045 1.41353 0.987793 1.41353M8.98778 9.25297C8.98778 4.87471 12.5651 1.33325 16.9878 1.33325"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/#">Pricing</a>
              </li>
              <li>
                <a href="/#">
                  Resources
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dist_marketing-link-iconSm__7vk6N dist_marketing-link-endIcon__zI5Q3"
                  >
                    <path
                      d="M8.98781 9.33325C8.98781 4.95499 5.41045 1.41353 0.987793 1.41353M8.98778 9.25297C8.98778 4.87471 12.5651 1.33325 16.9878 1.33325"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="navButtons">
            <ul>
              <li>
                <div className="globe">
                  {' '}
                  <a href="/#">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        fill="currentColor"
                        clip="evenodd"
                        d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12ZM13.0033 22.3936C12.574 22.8778 12.2326 23 12 23C11.7674 23 11.426 22.8778 10.9967 22.3936C10.5683 21.9105 10.1369 21.1543 9.75435 20.1342C9.3566 19.0735 9.03245 17.7835 8.81337 16.3341C9.8819 16.1055 10.9934 15.9922 12.1138 16.0004C13.1578 16.0081 14.1912 16.1211 15.1866 16.3341C14.9675 17.7835 14.6434 19.0735 14.2457 20.1342C13.8631 21.1543 13.4317 21.9105 13.0033 22.3936ZM15.3174 15.3396C14.2782 15.1229 13.2039 15.0084 12.1211 15.0004C10.9572 14.9919 9.7999 15.1066 8.68263 15.3396C8.58137 14.4389 8.51961 13.4874 8.50396 12.5H15.496C15.4804 13.4875 15.4186 14.4389 15.3174 15.3396ZM16.1609 16.5779C15.736 19.3214 14.9407 21.5529 13.9411 22.8293C16.6214 22.3521 18.9658 20.9042 20.5978 18.862C19.6345 18.0597 18.4693 17.3939 17.1586 16.9062C16.8326 16.7849 16.4997 16.6754 16.1609 16.5779ZM21.1871 18.0517C20.1389 17.1891 18.8906 16.4837 17.5074 15.969C17.1122 15.822 16.708 15.6912 16.2967 15.5771C16.411 14.5992 16.4798 13.5676 16.4962 12.5H22.9888C22.8973 14.5456 22.2471 16.4458 21.1871 18.0517ZM7.70333 15.5771C7.58896 14.5992 7.52024 13.5676 7.50384 12.5H1.01116C1.10267 14.5456 1.75288 16.4458 2.81287 18.0517C3.91698 17.1431 5.24216 16.4096 6.71159 15.8895C7.0368 15.7744 7.3677 15.6702 7.70333 15.5771ZM3.40224 18.862C5.03424 20.9042 7.37862 22.3521 10.0589 22.8293C9.05934 21.5529 8.26398 19.3214 7.83906 16.5779C7.57069 16.6552 7.3059 16.74 7.04526 16.8322C5.65305 17.325 4.41634 18.0173 3.40224 18.862ZM15.496 11.5H8.50396C8.51961 10.5126 8.58136 9.56113 8.68263 8.66039C9.84251 8.90232 11.0448 9.01653 12.2521 8.99807C13.2906 8.9822 14.3202 8.86837 15.3174 8.66039C15.4186 9.56113 15.4804 10.5126 15.496 11.5ZM9.75435 3.86584C9.3566 4.9265 9.03245 6.21653 8.81337 7.66594C9.92191 7.90306 11.0758 8.01594 12.2369 7.99819C13.2391 7.98287 14.2304 7.87047 15.1866 7.66594C14.9675 6.21653 14.6434 4.9265 14.2457 3.86584C13.8631 2.84566 13.4317 2.08954 13.0033 1.60643C12.574 1.12215 12.2326 1 12 1C11.7674 1 11.426 1.12215 10.9967 1.60643C10.5683 2.08954 10.1369 2.84566 9.75435 3.86584ZM16.4962 11.5C16.4798 10.4324 16.411 9.40077 16.2967 8.42286C16.6839 8.31543 17.0648 8.19328 17.4378 8.05666C18.848 7.54016 20.1208 6.82586 21.1871 5.94826C22.2471 7.55418 22.8973 9.4544 22.9888 11.5H16.4962ZM17.0939 7.11766C18.4298 6.62836 19.6178 5.95419 20.5978 5.13796C18.9658 3.09584 16.6214 1.64793 13.9411 1.17072C14.9407 2.44711 15.736 4.67864 16.1609 7.42207C16.4773 7.33102 16.7886 7.22949 17.0939 7.11766ZM7.33412 7.26641C7.50092 7.32131 7.66929 7.37321 7.83905 7.42207C8.26398 4.67864 9.05934 2.44711 10.0589 1.17072C7.37862 1.64793 5.03423 3.09584 3.40224 5.13796C4.48835 6.04266 5.82734 6.77048 7.33412 7.26641ZM7.02148 8.21629C5.4308 7.69274 3.99599 6.92195 2.81287 5.94826C1.75288 7.55418 1.10267 9.4544 1.01116 11.5H7.50384C7.52024 10.4324 7.58896 9.40077 7.70333 8.42286C7.47376 8.35918 7.24638 8.29031 7.02148 8.21629Z"
                      />
                    </svg>
                  </a>
                </div>
              </li>
              <li>
                <a href="/#">Log in</a>
              </li>
              <li>
                <div className="SignUpButton">
                  <a href="/#">Sign Up Free</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="Hero">
          <div className="Hero-content">
            <div className="Hero-right">
              <div className="Hero-h1">
                <h1>Grow revenue with the most approachable CRM</h1>
              </div>
              <div className="Hero-p">
                <p>
                  The all-in-one platform to automate your marketing campaigns
                  over Email, SMS, WhatsApp or chat. Join the 500,000 companies
                  who trust Brevo.
                </p>
              </div>

              <div className="Hero-SignUp">
                <div className="SignUpButton">
                  <a href="/#">Sign Up Free</a>
                </div>
              </div>
            </div>

            <div className="Hero-Left">
              <img
                alt=""
                src="https://corp-backend.brevo.com/wp-content/uploads/2023/09/en_hero_section_image_website.webp"
                height="472.5"
              />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="Footer-content">
          <div className="App-footer">
            <div className="logo">
              <a href="/#">
                <svg
                  width="136"
                  height="40"
                  viewBox="0 0 163 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#0B996E"
                    d="M133.706 29.7211C133.706 22.4541 138.322 17.3432 144.889 17.3432C151.456 17.3432 156.147 22.4511 156.147 29.7211C156.147 36.991 151.457 41.8095 144.889 41.8095C138.321 41.8095 133.706 36.7709 133.706 29.7211ZM126.85 29.7211C126.85 40.4436 134.355 48 144.888 48C155.422 48 163 40.4436 163 29.7211C163 18.9986 155.496 11.1557 144.888 11.1557C134.281 11.1557 126.85 18.8569 126.85 29.7211ZM91.8539 11.5869L105.998 47.5668H112.637L126.78 11.5869H119.636L109.39 39.3641H109.245L98.9983 11.5869H91.8539ZM64.3615 28.4245C64.7938 21.8028 69.196 17.3432 75.1855 17.3432C80.3798 17.3432 84.2771 20.654 84.8545 25.6202H72.8756C68.6185 25.6202 66.3086 26.1238 64.5792 28.4275H64.3615V28.4255V28.4245ZM57.5073 29.504C57.5073 40.2265 65.0841 47.997 75.5453 47.997C82.6172 47.997 88.8213 44.3997 91.491 38.7128L85.7192 35.8332C83.6996 39.5752 79.8023 41.8065 75.5453 41.8065C70.4205 41.8065 65.8037 37.9198 65.8037 34.1777C65.8037 32.2359 67.1028 31.3705 68.9783 31.3705H91.8508V29.4286C91.8508 18.6337 84.9241 11.1497 74.9678 11.1497C65.0115 11.1497 57.5063 18.8508 57.5063 29.501M37.881 47.5628H44.3754V25.4745C44.3754 20.7254 47.3323 17.3422 51.4473 17.3422C53.1797 17.3422 54.9817 17.9181 55.8494 18.7081C56.4995 16.9803 57.5093 15.2556 59.0241 13.5278C57.2916 12.0895 54.3347 11.1517 51.4473 11.1517C43.5107 11.1517 37.881 17.0527 37.881 25.4715V47.5648V47.5628ZM6.4944 23.7487V6.18745H17.1733C20.7803 6.18745 23.1628 8.27406 23.1628 11.4402C23.1628 15.0374 20.0607 17.7723 13.7114 19.859C9.38181 21.2249 7.4347 22.3767 6.71209 23.7457L6.4944 23.7477V23.7487ZM6.4944 41.3793V34.04C6.4944 30.8016 9.23668 27.6355 13.0614 26.4113C16.4537 25.2594 19.2655 24.1075 21.648 22.8863C24.8226 24.7589 26.7698 27.9943 26.7698 31.3775C26.7698 37.1338 21.2852 41.3793 13.8535 41.3793H6.4944ZM0 47.5668H14.431C25.4001 47.5668 33.624 40.7311 33.624 31.664C33.624 26.6977 31.0994 22.238 26.6246 19.3584C28.9346 17.0547 30.017 14.3922 30.017 11.1537C30.017 4.46269 25.1824 0 17.8959 0H0V47.5668Z"
                  />
                </svg>
              </a>
            </div>
            <div className="SoMe-Links">
              <ul>
                <li>
                  <div className="Twitter">
                    {' '}
                    <a href="/#">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32873C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.1547 12.1338 5.14131C11.6859 6.12792 11.5754 7.23461 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51564 1.13503 6.73609C1.418 7.95653 2.15506 9.02344 3.19641 9.71998C2.41463 9.69516 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.1669 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z"
                          fill="#474747"
                        />
                      </svg>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="LinkedIn">
                    {' '}
                    <a href="/#">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                          fill="#474747"
                        />
                      </svg>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="Insta">
                    {' '}
                    <a href="/#">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85937 20.0344 3.12187 20.4516 3.53906C20.8734 3.96094 21.1313 4.35937 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41407 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78437 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35937 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85937 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41407 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126562 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332813 4.90312 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332813 19.0969 0.628125 19.8562C0.9375 20.6484 1.34531 21.3187 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3187 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74687 23.9719 8.33906 23.9156 7.05937C23.8594 5.78437 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                          fill="#474747"
                        />
                        <path
                          d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                          fill="#474747"
                        />
                        <path
                          d="M19.8469 5.59214C19.8469 6.38902 19.2 7.03121 18.4078 7.03121C17.6109 7.03121 16.9688 6.38433 16.9688 5.59214C16.9688 4.79527 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
                          fill="#474747"
                        />
                      </svg>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="Youtube">
                    {' '}
                    <a href="/#">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.7609 7.20005C23.7609 7.20005 23.5266 5.54536 22.8047 4.8188C21.8906 3.86255 20.8688 3.85786 20.4 3.80161C17.0438 3.55786 12.0047 3.55786 12.0047 3.55786H11.9953C11.9953 3.55786 6.95625 3.55786 3.6 3.80161C3.13125 3.85786 2.10938 3.86255 1.19531 4.8188C0.473438 5.54536 0.24375 7.20005 0.24375 7.20005C0.24375 7.20005 0 9.14536 0 11.086V12.9047C0 14.8454 0.239062 16.7907 0.239062 16.7907C0.239062 16.7907 0.473437 18.4454 1.19062 19.1719C2.10469 20.1282 3.30469 20.0954 3.83906 20.1985C5.76094 20.3813 12 20.4376 12 20.4376C12 20.4376 17.0438 20.4282 20.4 20.1891C20.8688 20.1329 21.8906 20.1282 22.8047 19.1719C23.5266 18.4454 23.7609 16.7907 23.7609 16.7907C23.7609 16.7907 24 14.8501 24 12.9047V11.086C24 9.14536 23.7609 7.20005 23.7609 7.20005ZM9.52031 15.1126V8.36724L16.0031 11.7516L9.52031 15.1126Z"
                          fill="#474747"
                        />
                      </svg>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="FB">
                    {' '}
                    <a href="/#">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9894 4.3882 22.954 10.125 23.8542V15.4687H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92187 17.3438 4.92187V7.875H15.8306C14.34 7.875 13.875 8.80007 13.875 9.75V12H17.2031L16.6711 15.4687H13.875V23.8542C19.6118 22.954 24 17.9894 24 12Z"
                          fill="#474747"
                        />
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="Link-List">
            <ul className="Link-Items">
              <li>About</li>
              <li>Products</li>
              <li>Community</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="Impressum">
        <p className="Impressum-p">Empty</p>
      </div>
    </body>
  );
}

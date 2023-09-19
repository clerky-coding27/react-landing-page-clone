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
                {' '}
                <a href="/#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="globe"
                  >
                    <path
                      fillRule="evenodd"
                      fill="currentColor"
                      clip="evenodd"
                      d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12ZM13.0033 22.3936C12.574 22.8778 12.2326 23 12 23C11.7674 23 11.426 22.8778 10.9967 22.3936C10.5683 21.9105 10.1369 21.1543 9.75435 20.1342C9.3566 19.0735 9.03245 17.7835 8.81337 16.3341C9.8819 16.1055 10.9934 15.9922 12.1138 16.0004C13.1578 16.0081 14.1912 16.1211 15.1866 16.3341C14.9675 17.7835 14.6434 19.0735 14.2457 20.1342C13.8631 21.1543 13.4317 21.9105 13.0033 22.3936ZM15.3174 15.3396C14.2782 15.1229 13.2039 15.0084 12.1211 15.0004C10.9572 14.9919 9.7999 15.1066 8.68263 15.3396C8.58137 14.4389 8.51961 13.4874 8.50396 12.5H15.496C15.4804 13.4875 15.4186 14.4389 15.3174 15.3396ZM16.1609 16.5779C15.736 19.3214 14.9407 21.5529 13.9411 22.8293C16.6214 22.3521 18.9658 20.9042 20.5978 18.862C19.6345 18.0597 18.4693 17.3939 17.1586 16.9062C16.8326 16.7849 16.4997 16.6754 16.1609 16.5779ZM21.1871 18.0517C20.1389 17.1891 18.8906 16.4837 17.5074 15.969C17.1122 15.822 16.708 15.6912 16.2967 15.5771C16.411 14.5992 16.4798 13.5676 16.4962 12.5H22.9888C22.8973 14.5456 22.2471 16.4458 21.1871 18.0517ZM7.70333 15.5771C7.58896 14.5992 7.52024 13.5676 7.50384 12.5H1.01116C1.10267 14.5456 1.75288 16.4458 2.81287 18.0517C3.91698 17.1431 5.24216 16.4096 6.71159 15.8895C7.0368 15.7744 7.3677 15.6702 7.70333 15.5771ZM3.40224 18.862C5.03424 20.9042 7.37862 22.3521 10.0589 22.8293C9.05934 21.5529 8.26398 19.3214 7.83906 16.5779C7.57069 16.6552 7.3059 16.74 7.04526 16.8322C5.65305 17.325 4.41634 18.0173 3.40224 18.862ZM15.496 11.5H8.50396C8.51961 10.5126 8.58136 9.56113 8.68263 8.66039C9.84251 8.90232 11.0448 9.01653 12.2521 8.99807C13.2906 8.9822 14.3202 8.86837 15.3174 8.66039C15.4186 9.56113 15.4804 10.5126 15.496 11.5ZM9.75435 3.86584C9.3566 4.9265 9.03245 6.21653 8.81337 7.66594C9.92191 7.90306 11.0758 8.01594 12.2369 7.99819C13.2391 7.98287 14.2304 7.87047 15.1866 7.66594C14.9675 6.21653 14.6434 4.9265 14.2457 3.86584C13.8631 2.84566 13.4317 2.08954 13.0033 1.60643C12.574 1.12215 12.2326 1 12 1C11.7674 1 11.426 1.12215 10.9967 1.60643C10.5683 2.08954 10.1369 2.84566 9.75435 3.86584ZM16.4962 11.5C16.4798 10.4324 16.411 9.40077 16.2967 8.42286C16.6839 8.31543 17.0648 8.19328 17.4378 8.05666C18.848 7.54016 20.1208 6.82586 21.1871 5.94826C22.2471 7.55418 22.8973 9.4544 22.9888 11.5H16.4962ZM17.0939 7.11766C18.4298 6.62836 19.6178 5.95419 20.5978 5.13796C18.9658 3.09584 16.6214 1.64793 13.9411 1.17072C14.9407 2.44711 15.736 4.67864 16.1609 7.42207C16.4773 7.33102 16.7886 7.22949 17.0939 7.11766ZM7.33412 7.26641C7.50092 7.32131 7.66929 7.37321 7.83905 7.42207C8.26398 4.67864 9.05934 2.44711 10.0589 1.17072C7.37862 1.64793 5.03423 3.09584 3.40224 5.13796C4.48835 6.04266 5.82734 6.77048 7.33412 7.26641ZM7.02148 8.21629C5.4308 7.69274 3.99599 6.92195 2.81287 5.94826C1.75288 7.55418 1.10267 9.4544 1.01116 11.5H7.50384C7.52024 10.4324 7.58896 9.40077 7.70333 8.42286C7.47376 8.35918 7.24638 8.29031 7.02148 8.21629Z"
                    />
                  </svg>
                </a>
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
              <h1>Grow revenue with the most approachable CRM</h1>
              <p>
                The all-in-one platform to automate your marketing campaigns
                over Email, SMS, WhatsApp or chat. Join the 500,000 companies
                who trust Brevo.
              </p>
              <div className="SignUpButton">
                <a href="/#">Sign Up Free</a>
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
    </body>
  );
}

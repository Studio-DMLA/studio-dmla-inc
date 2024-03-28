import Link from "next/link";
import SectionHeader from "../../components/snippets/section-header";
import styles from "./page.module.css";

const specialize = [
  {
    image_url: "web-mobile_cutting-edge.svg",
    image_alt: "Specialize in web development and mobile browsers",
    text: ["Web Development", "Design & Maintenance"],
    link: "web-dev-design",
  },
  {
    image_url: "technical seo.svg",
    image_alt: "Specialize in web development and mobile browsers",
    text: ["Technical SEO (Search", "Engine Optimization)"],
    link: "technical-seo",
  },
  {
    image_url: "drawing tablet.svg",
    image_alt: "Specialize in web development and mobile browsers",
    text: ["Digital &", "Graphic Design"],
    link: "digital-graphic-design",
  },
  {
    image_url: "3d on laptop.svg",
    image_alt: "Specialize in web development and mobile browsers",
    text: ["3D Rendering"],
    link: "3d-rendering",
  },
];

const waystowork = [
  {
    title: "Direct placement:",
    text: "We place professionals, such as software developers, from Latin America directly into your company in North America. They will work remotely and become part of your team while enjoying the added support of the Studio DMLA team such as weekly meetings, one-to-one preparation for dev demos, English workshops and language support, and more.",
    image_url: "number1.svg",
    image_alt: "icon for direct placement",
    width: 36,
  },
  {
    title: "Assigned team:",
    text: "We assign a team to a client for a number of hours per month. This team, with DMLA’s oversight, has the skill set needed to complement your in-house team.",
    image_url: "number2.svg",
    image_alt: "icon for direct placement",
    width: 66,
  },
  {
    title: "Per scope:",
    text: "We implement a project by scope with a team and the number of hours allocated to the project.",
    image_url: "number3.svg",
    image_alt: "icon for direct placement",
    width: 67,
  },
];

export default function CuttingEdge() {
  return (
    <section
      className={styles.cuttingedge + " full subgrid font-color_primary"}
    >
      <SectionHeader
        id="cuttingedge"
        darker={true}
        title="The Canadian digital marketing studio for talent from Latin America"
        subtitle="We specialize in:"
      />
      <div className="content typ-gap display-flex flex-justify-center flex-row font-color_secondary">
        <div className={styles.specialize}>
          {specialize.map((spec, key) => (
            <a href={"#" + spec.link} key={key} className={styles.spec}>
              <img
                src={spec.image_url}
                alt={spec.image_alt}
                loading="lazy"
                width={161}
                height={160}
                style={{
                  width: "auto",
                  height: "10rem",
                }}
              />
              <div className={styles.bullet}>
                <img
                  src={"/plus-art.svg"}
                  alt="bullet icon text"
                  loading="lazy"
                  width={16}
                  height={16}
                  style={{
                    width: "auto",
                    height: "1rem",
                  }}
                />
                <div>
                  {spec.text.map((p, key) => (
                    <p key={key}>{p}</p>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className={styles.waystowork}>
          <div className={styles.titleArea}>
            <img
              className={styles.icon}
              src={"/roadmap guide.svg"}
              loading="lazy"
              alt="icon of 2 chat bubbles"
              width={48}
              height={48}
              style={{
                width: "auto",
                height: "3rem",
              }}
            />
            <h3 className={styles.title + " font-color_primary"}>
              Ways to work with us
            </h3>
            <p>At Studio DMLA, we have three models of work:</p>
          </div>
          <div className={styles.ways}>
            {waystowork.map((way, key) => (
              <div key={key} className={styles.way}>
                <img
                  src={way.image_url}
                  loading="lazy"
                  alt={way.image_alt}
                  width={way.width}
                  height={80}
                  style={{
                    width: "auto",
                    height: "5rem",
                  }}
                />
                <h3 className={styles.waytitle + " font-color_primary"}>
                  {way.title}
                </h3>
                <p>{way.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.book}>
        <a href="#bookaconsultation" className="">
          <svg
            width="196"
            height="57"
            viewBox="0 0 196 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_805_5944)">
              <g clip-path="url(#clip1_805_5944)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0V57H184.6L196 45.6V0H0Z"
                  fill="#3E98A6"
                />
              </g>
              <g clip-path="url(#clip2_805_5944)">
                <path
                  d="M46.35 25.67C48.43 25.67 50.11 27.35 50.11 29.43V29.81C50.11 31.89 48.43 33.57 46.35 33.57"
                  stroke="#F1F0F0"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M40.06 14.5C40.06 14.5 41.57 15.77 40.06 17.28C38.55 18.79 40.06 20.06 40.06 20.06"
                  stroke="#F1F0F0"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35.68 14.5C35.68 14.5 37.19 15.77 35.68 17.28C34.17 18.79 35.68 20.06 35.68 20.06"
                  stroke="#F1F0F0"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.31 14.5C31.31 14.5 32.82 15.77 31.31 17.28C29.8 18.79 31.31 20.06 31.31 20.06"
                  stroke="#F1F0F0"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.01 23.88V33.92C46.01 37.52 43.09 40.44 39.49 40.44H31.88C28.28 40.44 25.36 37.52 25.36 33.92V23.88H46.02H46.01Z"
                  stroke="#F1F0F0"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.6 41.97L28.08 44.5H43.12L50.6 41.97"
                  stroke="#F1F0F0"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <path
                d="M77.3837 26V16.2395H80.6305C81.841 16.2395 82.7522 16.4577 83.3642 16.8942C83.9807 17.3307 84.289 17.9607 84.289 18.7842C84.289 19.2927 84.1562 19.7315 83.8907 20.1005C83.6297 20.465 83.1707 20.771 82.5137 21.0185C82.9007 21.104 83.2247 21.2277 83.4857 21.3897C83.7467 21.5472 83.9515 21.7295 84.1 21.9365C84.253 22.1435 84.361 22.3685 84.424 22.6115C84.4915 22.8545 84.5252 23.1065 84.5252 23.3675C84.5252 24.254 84.2125 24.9155 83.587 25.352C82.966 25.784 82.0187 26 80.7452 26H77.3837ZM78.8282 24.8255H80.752C81.508 24.8255 82.0817 24.6972 82.4732 24.4407C82.8647 24.1797 83.0605 23.7905 83.0605 23.273C83.0605 22.8995 82.9637 22.5935 82.7702 22.355C82.5767 22.1165 82.3157 21.941 81.9872 21.8285C81.6587 21.716 81.292 21.6597 80.887 21.6597H78.8282V24.8255ZM78.8282 20.465H80.887C81.13 20.465 81.3685 20.4402 81.6025 20.3907C81.8365 20.3412 82.0502 20.2602 82.2437 20.1477C82.4372 20.0307 82.5925 19.8755 82.7095 19.682C82.8265 19.4885 82.885 19.2522 82.885 18.9732C82.885 18.4422 82.6847 18.0485 82.2842 17.792C81.8837 17.5355 81.364 17.4072 80.725 17.4072H78.8282V20.465ZM89.1518 26.135C88.4993 26.135 87.9301 25.9955 87.4441 25.7165C86.9581 25.433 86.5801 25.0235 86.3101 24.488C86.0401 23.9525 85.9051 23.3045 85.9051 22.544C85.9051 21.8105 86.0333 21.1692 86.2898 20.6202C86.5463 20.0712 86.9153 19.646 87.3968 19.3445C87.8828 19.0385 88.4701 18.8855 89.1586 18.8855C89.8156 18.8855 90.3848 19.0295 90.8663 19.3175C91.3478 19.601 91.7213 20.0172 91.9868 20.5662C92.2523 21.1107 92.3851 21.77 92.3851 22.544C92.3851 23.2505 92.2613 23.8737 92.0138 24.4137C91.7663 24.9537 91.4018 25.3767 90.9203 25.6827C90.4433 25.9843 89.8538 26.135 89.1518 26.135ZM89.1586 25.0212C89.5591 25.0212 89.8921 24.9177 90.1576 24.7107C90.4231 24.4992 90.6233 24.2045 90.7583 23.8265C90.8933 23.444 90.9608 23.003 90.9608 22.5035C90.9608 22.04 90.9001 21.6192 90.7786 21.2412C90.6616 20.8587 90.4703 20.555 90.2048 20.33C89.9438 20.105 89.5951 19.9925 89.1586 19.9925C88.7581 19.9925 88.4206 20.096 88.1461 20.303C87.8761 20.5055 87.6736 20.7957 87.5386 21.1737C87.4036 21.5472 87.3361 21.9905 87.3361 22.5035C87.3361 22.958 87.3968 23.3765 87.5183 23.759C87.6398 24.1415 87.8333 24.4475 88.0988 24.677C88.3688 24.9065 88.7221 25.0212 89.1586 25.0212ZM96.8247 26.135C96.1722 26.135 95.6029 25.9955 95.1169 25.7165C94.6309 25.433 94.2529 25.0235 93.9829 24.488C93.7129 23.9525 93.5779 23.3045 93.5779 22.544C93.5779 21.8105 93.7062 21.1692 93.9627 20.6202C94.2192 20.0712 94.5882 19.646 95.0697 19.3445C95.5557 19.0385 96.1429 18.8855 96.8314 18.8855C97.4884 18.8855 98.0577 19.0295 98.5392 19.3175C99.0207 19.601 99.3942 20.0172 99.6597 20.5662C99.9252 21.1107 100.058 21.77 100.058 22.544C100.058 23.2505 99.9342 23.8737 99.6867 24.4137C99.4392 24.9537 99.0747 25.3767 98.5932 25.6827C98.1162 25.9843 97.5267 26.135 96.8247 26.135ZM96.8314 25.0212C97.2319 25.0212 97.5649 24.9177 97.8304 24.7107C98.0959 24.4992 98.2962 24.2045 98.4312 23.8265C98.5662 23.444 98.6337 23.003 98.6337 22.5035C98.6337 22.04 98.5729 21.6192 98.4514 21.2412C98.3344 20.8587 98.1432 20.555 97.8777 20.33C97.6167 20.105 97.2679 19.9925 96.8314 19.9925C96.4309 19.9925 96.0934 20.096 95.8189 20.303C95.5489 20.5055 95.3464 20.7957 95.2114 21.1737C95.0764 21.5472 95.0089 21.9905 95.0089 22.5035C95.0089 22.958 95.0697 23.3765 95.1912 23.759C95.3127 24.1415 95.5062 24.4475 95.7717 24.677C96.0417 24.9065 96.3949 25.0212 96.8314 25.0212ZM101.636 26V15.9695H103.08V22.3482L106.165 19.0205H107.785L105.26 21.7137L107.933 26H106.435L104.336 22.6317L103.08 23.9345V26H101.636ZM114.49 26.135C114.04 26.135 113.64 26.054 113.289 25.892C112.942 25.73 112.67 25.496 112.472 25.19C112.274 24.884 112.175 24.515 112.175 24.083C112.175 23.309 112.447 22.7307 112.992 22.3482C113.541 21.9657 114.418 21.7632 115.624 21.7407L116.772 21.707V21.2007C116.772 20.8002 116.652 20.4852 116.414 20.2557C116.175 20.0262 115.806 19.9137 115.307 19.9182C114.938 19.9182 114.607 20.0037 114.315 20.1747C114.022 20.3457 113.831 20.627 113.741 21.0185H112.492C112.519 20.555 112.652 20.1657 112.89 19.8507C113.133 19.5312 113.466 19.2905 113.889 19.1285C114.312 18.9665 114.807 18.8855 115.374 18.8855C116.013 18.8855 116.538 18.9732 116.947 19.1487C117.357 19.3197 117.66 19.5717 117.858 19.9047C118.061 20.2377 118.162 20.6427 118.162 21.1197V26H116.934L116.826 24.7175C116.565 25.253 116.234 25.6242 115.833 25.8312C115.433 26.0338 114.985 26.135 114.49 26.135ZM114.942 25.1292C115.163 25.1292 115.381 25.091 115.597 25.0145C115.813 24.9335 116.009 24.8255 116.184 24.6905C116.36 24.551 116.499 24.3957 116.603 24.2247C116.711 24.0537 116.767 23.8782 116.772 23.6982V22.544L115.827 22.5642C115.345 22.5687 114.936 22.6182 114.598 22.7127C114.265 22.8072 114.009 22.9535 113.829 23.1515C113.653 23.3495 113.565 23.6127 113.565 23.9412C113.565 24.3147 113.694 24.6072 113.95 24.8187C114.211 25.0257 114.542 25.1292 114.942 25.1292ZM69.6713 43V33.2395H71.7098L74.4571 41.002L77.2448 33.2395H79.2698V43H77.7916V35.224L75.0916 43H73.8293L71.1428 35.2847V43H69.6713ZM81.7343 43V33.2395H88.0388L88.0321 34.495H83.1856V37.4582H87.5123V38.6935H83.1788V41.7242L88.1536 41.731V43H81.7343ZM90.2377 43V33.2395H96.5422L96.5355 34.495H91.689V37.4582H96.0157V38.6935H91.6822V41.7242L96.657 41.731V43H90.2377ZM101.066 43V34.5557H97.9743V33.2395H105.474V34.5557H102.524V43H101.066ZM107.007 43V33.2395H108.452V43H107.007ZM110.923 43V33.2395H112.32L117.288 40.516V33.2395H118.739V43H117.443L112.367 35.5682V43H110.923ZM124.891 43.135C124.023 43.135 123.274 42.937 122.644 42.541C122.014 42.145 121.528 41.5757 121.186 40.8332C120.848 40.0862 120.679 39.1907 120.679 38.1467C120.679 37.0937 120.853 36.1915 121.199 35.44C121.55 34.684 122.047 34.1057 122.691 33.7052C123.334 33.3047 124.09 33.1045 124.959 33.1045C125.476 33.1045 125.956 33.1922 126.397 33.3677C126.842 33.5432 127.234 33.7817 127.571 34.0832C127.913 34.3847 128.183 34.7267 128.381 35.1092C128.579 35.4917 128.692 35.8922 128.719 36.3107H127.18C127.117 35.9642 126.982 35.6447 126.775 35.3522C126.572 35.0552 126.313 34.8167 125.998 34.6367C125.683 34.4567 125.328 34.3667 124.932 34.3667C124.405 34.3667 123.94 34.4972 123.535 34.7582C123.13 35.0192 122.812 35.4265 122.583 35.98C122.358 36.529 122.245 37.24 122.245 38.113C122.245 38.7925 122.315 39.3707 122.455 39.8477C122.599 40.3247 122.794 40.7095 123.042 41.002C123.289 41.2945 123.58 41.5082 123.913 41.6432C124.246 41.7737 124.601 41.839 124.979 41.839C125.353 41.839 125.681 41.7737 125.965 41.6432C126.248 41.5127 126.484 41.344 126.673 41.137C126.867 40.93 127.015 40.7072 127.119 40.4687C127.227 40.2257 127.29 39.9917 127.308 39.7667L127.355 38.977H125.074V37.9375L128.86 37.951V43H127.814V41.569C127.643 41.8345 127.429 42.0865 127.173 42.325C126.916 42.5635 126.601 42.7592 126.228 42.9122C125.854 43.0608 125.409 43.135 124.891 43.135Z"
                fill="#F1F0F0"
              />
              <g clip-path="url(#clip3_805_5944)">
                <path
                  d="M149.9 41.9C151.281 41.9 152.4 40.7807 152.4 39.4C152.4 38.0193 151.281 36.9 149.9 36.9C148.519 36.9 147.4 38.0193 147.4 39.4C147.4 40.7807 148.519 41.9 149.9 41.9Z"
                  stroke="#F1F0F0"
                  stroke-width="0.42"
                  stroke-miterlimit="10"
                />
                <path
                  d="M149.9 32C151.281 32 152.4 30.8807 152.4 29.5C152.4 28.1193 151.281 27 149.9 27C148.519 27 147.4 28.1193 147.4 29.5C147.4 30.8807 148.519 32 149.9 32Z"
                  stroke="#F1F0F0"
                  stroke-width="0.42"
                  stroke-miterlimit="10"
                />
                <path
                  d="M149.9 22.1C151.281 22.1 152.4 20.9807 152.4 19.6C152.4 18.2193 151.281 17.1 149.9 17.1C148.519 17.1 147.4 18.2193 147.4 19.6C147.4 20.9807 148.519 22.1 149.9 22.1Z"
                  stroke="#F1F0F0"
                  stroke-width="0.42"
                  stroke-miterlimit="10"
                />
                <path
                  d="M159.8 41.9C161.181 41.9 162.3 40.7807 162.3 39.4C162.3 38.0193 161.181 36.9 159.8 36.9C158.419 36.9 157.3 38.0193 157.3 39.4C157.3 40.7807 158.419 41.9 159.8 41.9Z"
                  stroke="#F1F0F0"
                  stroke-width="0.42"
                  stroke-miterlimit="10"
                />
                <path
                  d="M159.8 32C161.181 32 162.3 30.8807 162.3 29.5C162.3 28.1193 161.181 27 159.8 27C158.419 27 157.3 28.1193 157.3 29.5C157.3 30.8807 158.419 32 159.8 32Z"
                  stroke="#F1F0F0"
                  stroke-width="0.42"
                  stroke-miterlimit="10"
                />
                <path
                  d="M159.8 22.1C161.181 22.1 162.3 20.9807 162.3 19.6C162.3 18.2193 161.181 17.1 159.8 17.1C158.419 17.1 157.3 18.2193 157.3 19.6C157.3 20.9807 158.419 22.1 159.8 22.1Z"
                  stroke="#F1F0F0"
                  stroke-width="0.42"
                  stroke-miterlimit="10"
                />
                <path
                  d="M169.7 41.9C171.081 41.9 172.2 40.7807 172.2 39.4C172.2 38.0193 171.081 36.9 169.7 36.9C168.319 36.9 167.2 38.0193 167.2 39.4C167.2 40.7807 168.319 41.9 169.7 41.9Z"
                  stroke="#F1F0F0"
                  stroke-width="0.42"
                  stroke-miterlimit="10"
                />
                <path
                  d="M169.7 32C171.081 32 172.2 30.8807 172.2 29.5C172.2 28.1193 171.081 27 169.7 27C168.319 27 167.2 28.1193 167.2 29.5C167.2 30.8807 168.319 32 169.7 32Z"
                  stroke="#F1F0F0"
                  stroke-width="0.42"
                  stroke-miterlimit="10"
                />
                <path
                  d="M169.7 22.1C171.081 22.1 172.2 20.9807 172.2 19.6C172.2 18.2193 171.081 17.1 169.7 17.1C168.319 17.1 167.2 18.2193 167.2 19.6C167.2 20.9807 168.319 22.1 169.7 22.1Z"
                  stroke="#F1F0F0"
                  stroke-width="0.42"
                  stroke-miterlimit="10"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_805_5944">
                <rect width="196" height="57" fill="white" />
              </clipPath>
              <clipPath id="clip1_805_5944">
                <rect width="196" height="57" fill="white" />
              </clipPath>
              <clipPath id="clip2_805_5944">
                <rect
                  width="31.2"
                  height="31.2"
                  fill="white"
                  transform="translate(20 13.9)"
                />
              </clipPath>
              <clipPath id="clip3_805_5944">
                <rect
                  width="25.2"
                  height="25.2"
                  fill="white"
                  transform="translate(147.2 16.9)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
          
          </div>
    </section>
  );
}

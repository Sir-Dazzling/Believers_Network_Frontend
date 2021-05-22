import '../styles/globals.css';
import '../styles/cta_style.css';
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

function MyApp({ Component, pageProps })
{
  return <Component {...pageProps} />
}

export default MyApp

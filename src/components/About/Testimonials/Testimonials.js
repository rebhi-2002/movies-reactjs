import React from "react";
import classes from "../About.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bg1 from "../../../assets/testimonials/testimonials-1.jpg";
import bg2 from "../../../assets/testimonials/testimonials-2.jpg";
import bg3 from "../../../assets/testimonials/testimonials-3.jpg";
import bg4 from "../../../assets/testimonials/testimonials-4.jpg";
import bg5 from "../../../assets/testimonials/testimonials-5.jpg";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
//** الشرح:
// useInView: تُستخدم لمراقبة ما إذا كان العنصر (القسم) داخل مجال العرض. عندما يكون القسم مرئيًا (أي عندما يكون inView صحيحًا)، يتم تشغيل الرسوم المتحركة.
// threshold: يحدد نسبة الظهور المطلوبة لتفعيل الرسوم المتحركة. القيمة 0.1 تعني أن 10% من القسم يجب أن تكون مرئية لتفعيل الرسوم المتحركة.
// motion.div: يتم استخدامه مع خاصية animate للتحكم في الرسوم المتحركة بناءً على حالة inView.

const Testimonials = () => {
  const testimonialsData = [
    {
      quote:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      image: bg1,
      name: "Saul Goodman",
      position: "Ceo & Founder",
      rating: 5,
    },
    {
      quote:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      image: bg2,
      name: "Sara Wilsson",
      position: "Designer",
      rating: 4,
    },
    {
      quote:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      image: bg3,
      name: "Jena Karlis",
      position: "Store Owner",
      rating: 5,
    },
    {
      quote:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      image: bg4,
      name: "Matt Brandon",
      position: "Freelancer",
      rating: 3,
    },
    {
      quote:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      image: bg5,
      name: "John Larson",
      position: "Entrepreneur",
      rating: 3,
    },
    {
      quote: "The service was exceptional and the team was incredibly helpful!",
      image: bg1,
      name: "John Doe",
      position: "CEO of Company A",
      rating: 5, // تقييم 5 نجوم
    },
    {
      quote: "I had a great experience, highly recommend them!",
      image: bg2,
      name: "Jane Smith",
      position: "Marketing Manager at Company B",
      rating: 4, // تقييم 4 نجوم
    },
    {
      quote: "The product quality exceeded my expectations!",
      image: bg3,
      name: "Alice Johnson",
      position: "Product Owner at Company C",
      rating: 5, // تقييم 5 نجوم
    },
    {
      quote: "Very professional and easy to work with.",
      image: bg4,
      name: "Bob Brown",
      position: "CTO at Company D",
      rating: 3, // تقييم 3 نجوم
    },
    {
      quote: "I was impressed by their quick response time!",
      image: bg5,
      name: "Emily Davis",
      position: "Project Manager at Company E",
      rating: 4, // تقييم 4 نجوم
    },
    {
      quote:
        "The team delivered outstanding results on our web development project. Highly recommended!",
      image: bg5,
      name: "— John Doe,",
      position: "CEO of XYZ Company",
      rating: 4, // تقييم 4 نجوم
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={`container-fluid ${classes.testimonials}`}>
      {/* Start Testimonials */}
      <div className={classes["sectionTitle"]}>
        <h2>Client Testimonials</h2>
        <p>
          Hear what our clients have to say about the quality of our work and
          the exceptional results we deliver. Their feedback speaks volumes
          about our commitment to excellence.
        </p>
      </div>
      <Swiper
        // direction="vertical"
        spaceBetween={30}
        loop={true}
        navigation
        pagination={{
          clickable: true,
          // type: 'progressbar'
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        // slidesPerView={3} // عدد الشرائح في الوضع الافتراضي
        breakpoints={{
          // إعدادات الحجم الصغير 640px:
          640: {
            slidesPerView: 1, // عرض شريحة واحدة عند حجم الشاشة 640 بكسل أو أصغر
          },
          // إعدادات الحجم المتوسط 768px:
          768: {
            slidesPerView: 2, // عرض شريحتين عند حجم الشاشة 768 بكسل أو أصغر
          },
          // إعدادات الحجم الكبير 1024px:
          1024: {
            slidesPerView: 3, // عرض ثلاث شرائح عند حجم الشاشة 1024 بكسل أو أكبر
          },
        }}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`${classes["testimonial-item"]}`}>
                <blockquote>
                  <p>
                    <i
                      className={`bx bxs-quote-alt-left me-2 ${classes["quote-icon-left"]}`}
                    />
                    <cite>{testimonial.quote}</cite>
                    <i
                      className={`bx bxs-quote-alt-right ms-2 ${classes["quote-icon-right"]}`}
                    />
                  </p>
                </blockquote>
                <img
                  src={testimonial.image}
                  className={classes["testimonial-img"]}
                  alt=""
                />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.position}</h4>
                {/* Rating Stars */}
                <div className={classes["testimonial-rating"]}>
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`bx ${
                        i < testimonial.rating ? "bxs-star" : "bx-star"
                      } ${classes["star-icon"]}`}
                      style={{ color: "#f39c12" }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* End Testimonials */}
    </div>
  );
};
export default Testimonials;

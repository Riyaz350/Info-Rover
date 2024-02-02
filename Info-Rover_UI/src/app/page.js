import Footer from "@/components/shared/footer/Footer";
import Categories from "@/components/ui/hotTopic/Categories";
import HotTopic from "@/components/ui/hotTopic/HotTopic";
import ThirdSection from "@/components/ui/hotTopic/ThirdSection";

const Home = () => {
  return (
    <div>
      <HotTopic></HotTopic>
      <Categories></Categories>
      <ThirdSection></ThirdSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
import Banner from './Banner';
import MainContent from './MainContent';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const mode = useSelector((state) => state.app.mode); // Sử dụng useSelector đúng cách để lấy giá trị mode từ Redux

  useEffect(() => {
    // Thay đổi class của body theo chế độ mode
    document.body.className = mode === 'dark' ? 'dark-mode' : 'light-mode';
  }, [mode]); // useEffect sẽ chạy mỗi khi mode thay đổi

  return (
    <>
      <div>
        <Banner />
        <MainContent />
      </div>
    </>
  );
};

export default Home;

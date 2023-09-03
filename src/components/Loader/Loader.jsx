import { Oval } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Oval
        height={20}
        width={20}
        color="#777777"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#141416"
        strokeWidth={4}
        strokeWidthSecondary={3}
      />
    </LoaderContainer>
  );
};

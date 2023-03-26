import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export const Google = (props) => {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_40_724)">
        <Path
          d="M29.9842 15.2806C29.9842 14.0516 29.8821 13.1547 29.6613 12.2245H15.2988V17.772H23.7292C23.5593 19.1506 22.6415 21.2268 20.6018 22.6219L20.5732 22.8077L25.1144 26.2454L25.429 26.2761C28.3184 23.6684 29.9842 19.8316 29.9842 15.2806Z"
          fill={'#4285F4'}
        />
        <Path
          d="M15.2989 29.897C19.4291 29.897 22.8964 28.5682 25.429 26.2761L20.6019 22.622C19.3101 23.5023 17.5764 24.1168 15.2989 24.1168C11.2536 24.1168 7.82028 21.5092 6.59638 17.905L6.41698 17.9198L1.69505 21.4909L1.6333 21.6586C4.14882 26.5418 9.3159 29.897 15.2989 29.897Z"
          fill={'#34A853'}
        />
        <Path
          d="M6.59621 17.905C6.27328 16.9748 6.08638 15.9782 6.08638 14.9485C6.08638 13.9186 6.27328 12.9221 6.57922 11.992L6.57067 11.7939L1.78956 8.1655L1.63313 8.23821C0.596365 10.2646 0.00146484 12.5401 0.00146484 14.9485C0.00146484 17.3568 0.596365 19.6322 1.63313 21.6586L6.59621 17.905Z"
          fill={'#FBBC05'}
        />
        <Path
          d="M15.2989 5.78004C18.1713 5.78004 20.1089 6.99252 21.2138 8.00576L25.531 3.8866C22.8796 1.47824 19.4291 0 15.2989 0C9.31591 0 4.14882 3.35507 1.6333 8.2382L6.5794 11.992C7.82028 8.38774 11.2536 5.78004 15.2989 5.78004Z"
          fill={'#EB4335'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_40_724">
          <Rect width="30" height="30" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
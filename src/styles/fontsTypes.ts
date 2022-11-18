import spaceMonoRegularFont from '../assets/fonts/SpaceMono-Regular.ttf';
import spaceMonoBoldFont from '../assets/fonts/SpaceMono-Bold.ttf';

const fontHandler = (
  fontFamily: string,
  fontStyle: string,
  fontWeight: string,
  fontFormat: string,
  fontUrl: string
) => `
  @font-face {
    font-family: '${fontFamily}';
    font-style: ${fontStyle};
    font-weight: ${fontWeight};
    src: local('${fontFamily}'),
      url('${fontUrl}') format('${fontFormat}');
  }
`;

export const fonts = {
  spaceMonoRegular: fontHandler('SpaceMono', 'normal', '400', 'truetype', spaceMonoRegularFont),
  spaceMonoBold: fontHandler('SpaceMono', 'normal', '700', 'truetype', spaceMonoBoldFont),
};

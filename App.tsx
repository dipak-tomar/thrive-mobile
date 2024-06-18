import {NativeBaseProvider} from 'native-base';

import ApplicationNavigator from './src/Navigators/Application';

const App = () => {
  return (
    <NativeBaseProvider>
      <ApplicationNavigator />
    </NativeBaseProvider>
  );
};

export default App;

import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function navigateAndReset(routes = [], index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    );
  }
}

export function navigateAndSimpleReset(name: string, index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{name}],
      }),
    );
  }
}

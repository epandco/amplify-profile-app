import { StyleProvider } from '@ant-design/cssinjs';
import { MyRoutes } from './Routes'


import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
      <div className="App">
          <StyleProvider hashPriority="high">
              <Authenticator.Provider>
                  <MyRoutes />
              </Authenticator.Provider>
          < /StyleProvider>
      </div>
  );
}

export default withAuthenticator(App);

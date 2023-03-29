import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import { useAuthenticator, Button, View } from '@aws-amplify/ui-react';
import { Layout } from 'antd';
import styled from 'styled-components';
import '@aws-amplify/ui-react/styles.css';
import 'antd/dist/reset.css';

const { Header, Footer, Content } = Layout;

const StyledLayout = styled(Layout)`
  
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 650px;
    margin: auto;
  }
  
  .question,
  .ant-steps {
    margin-bottom: 1rem;
    max-width: 650px;
    width: auto;
  }
  
  .ant-steps {
    margin-top: 2rem;
  }
  
  label {
    .ant-radio-wrapper.css-dev-only-do-not-override-mxhywb {
      display: flex;
      span + span {
        line-height: 18px;
      }
    }
  }
  
  
`;

const StyledContent = styled(Content)`
  padding-top: 2rem;
  .ant-btn-primary {
    margin-bottom: 1rem;
  }

  .amplify-heading.amplify-heading--1 {
    margin: 1rem auto;
    text-align: center;
    max-width: 650px;
  }
 
`;

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: black;
  button {
    &.amplify-button {
      background-color: #ffffff;
    }
  }
`

const StyledFooter = styled(Footer)`
  &.ant-layout-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background: black;
    color: white;
    margin-top: 2rem;
    span {
      color: red;
      margin: 0 0.2rem;
    }
    a {
      color: white;
      margin-left: 0.2rem;
    }
  }
`

export function PageLayout() {
    const { route, signOut } = useAuthenticator((context) => [
        context.route,
        context.signOut,
    ]);
    const navigate = useNavigate();

    function logOut() {
        signOut();
        navigate('/login');
    }

    return (
        <StyledLayout>
            <nav>
                <StyledHeader>

                    <Button onClick={() => navigate('/profile')}>
                        Profile
                    </Button>
                    {route !== 'authenticated' ? (
                        <Button onClick={() => navigate('/login')}>Login</Button>
                    ) : (
                        <Button onClick={() => logOut()}>Logout</Button>
                    )}
                </StyledHeader>
            </nav>
            <main>
                <Outlet />
            </main>
            <StyledFooter>
                Footer
            </StyledFooter>
        </StyledLayout>
    );
}
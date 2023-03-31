import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import { useAuthenticator, Button, View, Heading } from '@aws-amplify/ui-react';
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
    padding: 0 2rem;
    background-color: #1877f2;
    height: 56px;
`;

const NavButton = styled(Button)`
    background-color: transparent;
    color: #ffffff;
    font-weight: 600;
    border: none;
    font-size: 14px;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: #ffffff;
    }
`;

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

                    <NavButton onClick={() => navigate('/profile')}>
                        Profile
                    </NavButton>
                    {route !== 'authenticated' ? (
                        <NavButton onClick={() => navigate('/login')}>Login</NavButton>
                    ) : (
                        <NavButton onClick={() => logOut()}>Logout</NavButton>
                    )}
                </StyledHeader>
            </nav>
            <View>
                {route === 'authenticated' ? 'You are logged in!' : 'Please Login!'}
            </View>
            <Outlet />
            <StyledFooter>
                Footer
            </StyledFooter>
        </StyledLayout>
    );
}
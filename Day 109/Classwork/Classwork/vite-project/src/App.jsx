import { AuthProvider } from './context/AuthContext';
import RegisterForm from './components/RegisterForm';

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <RegisterForm />
            </div>
        </AuthProvider>
    );
}

export default App;

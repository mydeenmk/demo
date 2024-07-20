import React, { useState ,useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Cookies from 'js-cookie'; // Import js-cookie

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'black',
        width: '100vw',
    },
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(25),
        paddingBottom: theme.spacing(2),
        justifyItems: 'center',
        marginRight: theme.spacing(25),
    },
    error: {
        verticalAlign: 'middle',
    },
    title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2),
    },
    signupLink: {
        marginTop: theme.spacing(2),
        textAlign: 'center',
    },
}));

function Signin() {
    const classes = useStyles();
    const navigate = useNavigate(); // Hook for redirecting
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
    });
    useEffect(() => {
        // Check if token is present in cookies on component mount
        const token = Cookies.get('token');
        if (token) {
            navigate('/Home'); // Redirect to home if token is present
        }
    }, [navigate]);
    const clickSubmit = async () => {
        try {
            const user = {
                email: values.email || undefined,
                password: values.password || undefined,
            };
            const data = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })

           const newData = await data.json()
           console.log("newData",newData.token)
           Cookies.set("token",newData.token)
           navigate('/Home');
        } catch (error) {

        }
    }
    // const clickSubmit = () => {
    // const user = {
    //     email: values.email || undefined,
    //     password: values.password || undefined,
    // };

    // fetch('http://localhost:3001/auth/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(user),
    // })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         if (data.error) {
    //             setValues({ ...values, error: data.error });
    //         } else {
    //             // Store token in cookies
    //             Cookies.set('authToken', data.token, { expires: 7 }); // Set token in cookies with a 7-day expiration
    //             Cookies.set('userId', data.userId, { expires: 7 });
    //             navigate('/Home');
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //         setValues({ ...values, error: 'Error fetching data. Please try again later.' });
    //     });
    // };

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" className={classes.title}>Sign In</Typography>
                    <TextField
                        id='email'
                        type='email'
                        label='Email'
                        className={classes.textField}
                        value={values.email}
                        onChange={handleChange('email')} margin="normal" />
                    <br />
                    <TextField
                        id='password'
                        type='password'
                        label='Password'
                        className={classes.textField}
                        value={values.password}
                        onChange={handleChange('password')} margin="normal" />
                    <br />
                    {values.error && (
                        <Typography component="p" color="error">
                            <Icon color="error" className={classes.error}>error</Icon>
                            {values.error}
                        </Typography>
                    )}
                </CardContent>
                <CardActions>
                    <Button color="primary" variant='contained' onClick={clickSubmit} className={classes.submit}>
                        Submit
                    </Button>
                </CardActions>
                <Typography className={classes.signupLink}>
                    Don't have an account?{' '}
                    <Link to="/signup">Sign Up</Link>
                </Typography>
            </Card>
        </div>
    );
}

export default Signin;

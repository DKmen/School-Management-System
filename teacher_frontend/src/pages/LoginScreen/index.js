import React from "react";

import { Dimensions } from "react-native";
import { Box, ScrollView, Input, FormControl, Button } from "native-base";

import { connect } from "react-redux";

import * as Actions from "../../hooks/action";

function LoginPage(props) {
    const [UserName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const LoginInApp = async () => {
        console.log('ererer')
        await props.login(UserName, password);
        props.navigation.navigate("Home");
    };

    return (
        <ScrollView>
            <Box
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                p={4}
                h={Dimensions.get("window").height * 0.8}
            >
                <FormControl>
                    <FormControl.Label>Teacher Name</FormControl.Label>
                    <Input
                        w={"100%"}
                        placeholder="Enter Teacher Id"
                        value={UserName}
                        variant="outline"
                        onChangeText={(item) => setUserName(item)}
                    />
                </FormControl>
                <FormControl my={2}>
                    <FormControl.Label>Teacher Password</FormControl.Label>
                    <Input
                        w={"100%"}
                        placeholder="Enter Teacher Password"
                        type="password"
                        variant="outline"
                        value={password}
                        onChangeText={(item) => setPassword(item)}
                    />
                </FormControl>
                <Button
                    my={4}
                    onPress={LoginInApp}
                    isLoading={props.data.Loading}
                    isLoadingText="Submitting"
                >
                    Login Into School
                </Button>
            </Box>
        </ScrollView>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (UserName, password) =>
            dispatch(Actions.LoginTeacher(UserName, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

interface Props {
    variant: 'header' | 'h1' | 'h2' | 'h3' | 'h4' | 'default';
    children: ReactNode;
    style?: StyleProp<TextStyle>
}

const Typography: React.FC<Props> = ({ variant, children, style }) => {
    var styles = getStyles(variant);
    color: 'white'
    return (
        <Text style={[styles, style]}>
            {children}
        </Text>
    );
};

const getStyles = (variant: Props['variant']) => {
    switch (variant) {
        case 'header':
            return styles.header;
        case 'h1':
            return styles.h1;
        case 'h2':
            return styles.h2;
        case 'h3':
            return styles.h3;
        case 'h4':
            return styles.h4;
        default:
            return styles.default;
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white'
    },
    h1: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    h2: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white'
    },
    h3: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    h4: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    default: {
        fontSize: 14,
        fontWeight: 'normal',
        color: 'white'
    },
});

export default Typography;

import React, { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {
    variant: 'header' | 'h1' | 'h2' | 'h3' | 'default';
    children: ReactNode;
}

const Typography: React.FC<Props> = ({ variant, children }) => {
    const styles = getStyles(variant);

    return (
        <Text style={styles}>
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
        default:
            return styles.default;
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    h3: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    default: {
        fontSize: 14,
        fontWeight: 'normal',
    },
});

export default Typography;

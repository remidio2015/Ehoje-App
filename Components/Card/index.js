import { Card, Text } from 'react-native-paper'

export function CardComponent({ nome, tipoSanguinio }) {
    return (
        <Card>
            <Card.Title title={nome} />
            <Card.Content>
                <Text>
                    Tipo Sanguinio: {tipoSanguinio}
                </Text>
            </Card.Content>
        </Card>

    );
}
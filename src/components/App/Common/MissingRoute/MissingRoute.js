import React from 'react';

const MissingRoute = () => {
    return <p className="text-danger text-center">Invalid path</p>;
}

/* class MissingRoute extends React.Component {
    render() {
        return <Container fluid>
            <Row>
                <Col>
                    <p className="text-danger text-center">Invalid path</p>
                </Col>
            </Row>
        </Container>;
    }
} */

export default MissingRoute;
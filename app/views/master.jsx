class Master extends React.Component {
    render() {
        return (
            <div>
                {React.cloneElement(this.props.children, {
                    key: this.props.location.pathname
                })}
            </div>
        );
    }
}

export default Master;
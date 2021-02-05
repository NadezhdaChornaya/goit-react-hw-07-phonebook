import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { FilterWrapper } from './styledFilter'
import { filterContactsActionCreater } from '../../redux/actions/contactsActions';
import contactsSelectors from '../../redux/selectors/contactsSelectors';
// import { connect } from 'react-redux';
// import PropTypes from "prop-types";

const Filter = () => {
    const filter = useSelector((state) => contactsSelectors.getFilterValueSelector(state))
    const dispatch = useDispatch();

    const handleFilter = (data) => dispatch(filterContactsActionCreater(data))

    return (

        <FilterWrapper className="wrapper">
            <h3 className="titleFilter">Find contacts by name</h3>
            <input name="filter" type="text" className="input" placeholder="Search..." value={filter} onChange={handleFilter} />
        </FilterWrapper>
    )
}

export default Filter













// const mapStateToProps = (state) => {
//     return {
//         state: state.contacts.items,
//         filter: state.contacts.filter
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {

//         filterContactsActionCreater: (data) => {
//             dispatch(filterContactsActionCreater(data))
//         },
//     }
// }



// Filter.propTypes = {
//     filterContactsActionCreater: PropTypes.func.isRequired,
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })),
// }

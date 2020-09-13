const CountReducer = (state=0,action) => {
    switch (action.type)
    {
    case 'Increment' : return state+1;break;
    case 'Decrement' : return state-1;break;
    default:return state; 
}
}
export default CountReducer;
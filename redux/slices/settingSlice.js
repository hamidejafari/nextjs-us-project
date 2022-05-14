import axios from "axios";

import {
  SETTING_DETAILS_REQUEST,
  SETTING_DETAILS_SUCCESS,
} from "../constants/settingConstant";

export default function settingReducer(
  state = { data: {}, loading: false, error: {} },
  action
) {
  switch (action.type) {
    case SETTING_DETAILS_REQUEST:
      return { ...state, loading: true };
    case SETTING_DETAILS_SUCCESS:
      return { loading: false, data: action.payload };
    default:
      return state;
  }
}

export const getSettingData = async (dispatch, getState) => {
  try {
    dispatch({ type: SETTING_DETAILS_REQUEST });
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/setting"
    );
    dispatch({
      type: SETTING_DETAILS_SUCCESS,
      payload: data.setting,
    });
  } catch (error) {
    console.log(error);
  }
};

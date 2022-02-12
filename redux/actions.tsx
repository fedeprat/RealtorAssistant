export const ACTIONS = {
  ADD_IMAGE: "addImage",
  ADD_ICON: 'addIcon',
  ADD_TITLE: 'addTitle'
};

interface ADDIMAGE {
  type: string;
  payload: {};
}
export function addImage(data: {}, name: number): ADDIMAGE {
  return {
    type: ACTIONS.ADD_IMAGE,
    payload: { data: data, name: name },
  };
}

export function addIcon(data: {}, name: string) {
  return {
    type: ACTIONS.ADD_ICON,
    payload: name
  }
}

export function addTitle(data: string) {
  return {
    type: ACTIONS.ADD_TITLE,
    payload: data
  }
}

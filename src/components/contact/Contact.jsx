import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  getContactsList,
} from "../../actions/contactsList.action";
import { randomNumberGenerator } from "./randomNumberGenerator";

const Contact = ({
  name,
  number,
  email,
  city,
  status,
  toggleFormModal,
  imgUrl,
  id,
  getContactIdFromContact,
  isFormModalOpen,
}) => {
  const { id: userId } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleOnDelete = async () => {
    await dispatch(deleteContact(userId, id));
    dispatch(getContactsList(userId));
  };

  const handleOnEdit = () => {
    getContactIdFromContact(id);
    toggleFormModal(isFormModalOpen ? false : true);
  };

  const imageUrl = imgUrl
    ? imgUrl
    : `https://avatars.dicebear.com/api/bottts/${randomNumberGenerator()}.svg`;

  return (
    <>
      <div className="flex flex-col mt-8">
        <div className="p-4 shadow-md bg-accent rounded-3xl">
          <div className="flex-none ">
            <div className="w-full h-full mb-3 text-center lg:h-32 lg:w-32 lg:mx-auto lg:pt-3 lg:mb-0">
              <img
                src={imageUrl}
                alt="Avatar"
                className="object-scale-down w-32 h-32 mx-auto lg:object-cover lg:h-32 lg:w-32 rounded-2xl lg:rounded-t-full lg:rounded-b-full"
              />
            </div>
            <div className="flex-auto py-2 m-3 justify-evenly">
              <div className="flex flex-wrap ">
                <div
                  className={
                    status === "active"
                      ? "flex-none w-full text-xs font-medium text-center text-blue-700 lg:text-center uppercase"
                      : "flex-none w-full text-xs font-medium text-center text-red-700 lg:text-center uppercase"
                  }
                >
                  {status}
                </div>
                <h2 className="flex-auto text-lg font-medium text-center text-secondary lg:text-center">
                  {name}
                </h2>
              </div>
              <p className="mt-3"></p>
              <div className="flex flex-wrap py-4 text-sm text-secondary-500">
                <div className="inline-flex items-center flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2 fill-current text-secondary"
                    version="1.1"
                    viewBox="0 0 349.661 349.661"
                    enableBackground="new 0 0 349.661 349.661"
                  >
                    <g>
                      <path d="M174.831,0C102.056,0,42.849,59.207,42.849,131.981c0,30.083,21.156,74.658,62.881,132.485   c30.46,42.215,61.363,76.607,61.671,76.95l7.429,8.245l7.429-8.245c0.309-0.342,31.211-34.734,61.671-76.95   c41.725-57.828,62.881-102.402,62.881-132.485C306.812,59.207,247.605,0,174.831,0z M174.83,319.617   c-37.058-42.692-111.98-139.048-111.98-187.636C62.849,70.235,113.084,20,174.831,20s111.981,50.235,111.981,111.981   C286.812,180.54,211.888,276.915,174.83,319.617z" />
                      <circle cx="174.831" cy="131.982" r="49.696" />
                    </g>
                  </svg>
                  <p className="">{city}</p>
                </div>
                <div className="inline-flex items-center flex-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 my-2 mr-2 fill-current text-secondary"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 201.629 201.629"
                  >
                    <path d="M139.321,201.629c-1.457,0-2.925-0.14-4.387-0.426c-0.04-0.006-0.08-0.012-0.12-0.019  c-2.116-0.364-52.265-9.341-89.971-47.047C14.447,123.742,4.194,84.726,1.17,69.123c-0.564-1.856-0.888-3.791-0.962-5.757  c-0.023-0.219-0.029-0.438-0.018-0.656c-0.054-6.129,2.288-11.87,6.615-16.197l12.818-12.818c0.75-0.75,1.768-1.172,2.828-1.172  s2.078,0.422,2.828,1.172l41.479,41.48c1.563,1.562,1.563,4.095,0,5.656L53.942,93.649c-0.327,0.327-0.656,0.637-0.992,0.935  c-5.987,5.316-7.148,14.626-2.694,21.65c4.279,6.747,9.12,12.838,14.387,18.105c6.239,6.238,13.642,11.89,22.001,16.795  c6.837,4.012,15.627,2.726,21.379-3.127l0.139-0.14l12.818-12.817c1.563-1.563,4.094-1.563,5.656,0l41.479,41.479  c1.563,1.562,1.563,4.095,0,5.656l-12.817,12.818C151.006,199.296,145.262,201.629,139.321,201.629z M135.976,193.265  c0.11,0.014,0.22,0.031,0.329,0.054c4.857,1.008,9.843-0.478,13.337-3.971l9.988-9.989l-35.822-35.822l-10.104,10.104  c-8.302,8.448-21.105,10.265-31.108,4.396c-8.946-5.25-16.889-11.319-23.608-18.039c-5.682-5.682-10.893-12.234-15.486-19.478  c-6.531-10.301-4.75-24.024,4.145-31.923c0.226-0.198,0.438-0.4,0.646-0.608l9.984-9.984L22.452,42.18l-9.99,9.989  c-2.832,2.833-4.348,6.609-4.27,10.637c0.003,0.044,0.005,0.087,0.006,0.131c0.04,1.376,0.266,2.725,0.672,4.008  c0.046,0.147,0.084,0.298,0.113,0.45c2.831,14.729,12.544,52.113,41.517,81.087C85.282,183.264,132.552,192.626,135.976,193.265z   M197.444,110.944c-2.209,0-4-1.791-4-4C193.444,52.387,149.058,8,94.5,8c-2.209,0-4-1.791-4-4s1.791-4,4-4  c58.97,0,106.944,47.975,106.944,106.944C201.444,109.153,199.653,110.944,197.444,110.944z M172.624,110.944c-2.209,0-4-1.791-4-4  c0-41.226-33.539-74.765-74.764-74.765c-2.209,0-4-1.791-4-4s1.791-4,4-4c45.636,0,82.764,37.128,82.764,82.765  C176.624,109.153,174.833,110.944,172.624,110.944z M147.866,110.944c-2.209,0-4-1.791-4-4c0-27.573-22.433-50.006-50.006-50.006  c-2.209,0-4-1.791-4-4s1.791-4,4-4c31.984,0,58.006,26.021,58.006,58.006C151.866,109.153,150.075,110.944,147.866,110.944z" />
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                  <p className="">{number}</p>
                </div>
                <div className="inline-flex items-center flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2 fill-current text-secondary"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 511.894 511.894"
                  >
                    <g>
                      <g>
                        <path d="M477.973,53.28H34.027C15.253,53.28,0,68.534,0,87.307v337.28c0,18.773,15.253,34.027,34.027,34.027h443.84    c18.773,0,34.027-15.253,34.027-34.027V87.307C512,68.534,496.747,53.28,477.973,53.28z M475.733,74.614L270.72,283.147    c-8.107,7.893-21.013,8-29.227,0.213L36.267,74.614H475.733z M21.333,422.667v-332.8l169.92,172.8L21.333,422.667z M36.907,437.28    l169.387-159.36l20.16,20.587c7.893,7.68,18.453,12.053,29.44,12.053c11.093,0,21.867-4.373,29.76-12.16l15.147-15.467    L474.667,437.28H36.907z M490.667,423.094L315.84,267.574L490.667,89.867V423.094z" />
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                  <p className="">{email}</p>
                </div>
              </div>
              <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
              <div className="flex space-x-3 text-sm font-medium">
                <div className="flex flex-auto space-x-3">
                  <button
                    className="inline-flex items-center px-2 py-2 mb-2 space-x-2 tracking-wider text-white bg-red-700 rounded-full shadow-sm md:mb-0 hover:bg-red-900"
                    onClick={handleOnDelete}
                  >
                    Delete
                  </button>
                </div>
                <button
                  className="px-5 py-2 mb-2 tracking-wider rounded-full shadow-sm md:mb-0 bg-secondary text-primary hover:bg-gray-400"
                  type="button"
                  aria-label="like"
                  onClick={handleOnEdit}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

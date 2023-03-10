// import { Button, Modal } from "antd";
// import { useState } from "react";
// import ScrollingParrallax from "../ScrollingParrallax";

// const WeModal = () => {
//   const [loading, setLoading] = useState(false);
//   const [open, setOpen] = useState(false);
//   const showModal = () => {
//     setOpen(true);
//   };
//   const handleOk = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setOpen(false);
//     }, 3000);
//   };
//   const handleCancel = () => {
//     setOpen(false);
//   };
//   return (
//     <>
//       <Button type='primary' onClick={showModal}>
//         Open Modal with customized footer
//       </Button>
//       <Modal open={open} title='Title' onOk={handleOk} onCancel={handleCancel}>
//         <ScrollingParrallax />
//       </Modal>
//     </>
//   );
// };

// export default WeModal;

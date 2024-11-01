import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // تحديث الحالة لعرض واجهة بديلة عند حدوث خطأ
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // تسجيل الخطأ إذا لزم الأمر
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    // يمكن هنا إرسال الخطأ إلى خادم تتبع الأخطاء
  }

  render() {
    if (this.state.hasError) {
      // عرض واجهة بديلة عند حدوث خطأ
      <div>
        <h1>Oops! Something went wrong, Please try again later.</h1>
        <button onClick={() => window.location.reload()}>Reload Page</button>
      </div>;
    }

    // عرض المكونات الفرعية إذا لم يكن هناك أي أخطاء
    return this.props.children;
  }
}

export default ErrorBoundary;

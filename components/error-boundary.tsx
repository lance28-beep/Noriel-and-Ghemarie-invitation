"use client"

import React, { Component, ErrorInfo, ReactNode } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

/**
 * Error Boundary Component
 * Catches JavaScript errors in child components and displays a fallback UI
 * instead of crashing the entire application (white screen)
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidMount() {
    if (typeof window === "undefined") return
    window.addEventListener("error", this.handleWindowError)
    window.addEventListener("unhandledrejection", this.handleUnhandledRejection)
  }

  componentWillUnmount() {
    if (typeof window === "undefined") return
    window.removeEventListener("error", this.handleWindowError)
    window.removeEventListener("unhandledrejection", this.handleUnhandledRejection)
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console for debugging
    console.error("ErrorBoundary caught an error:", error, errorInfo)
  }

  private handleWindowError = (event: ErrorEvent) => {
    if (this.state.hasError) return
    const error =
      event.error instanceof Error
        ? event.error
        : new Error(event.message || "Unexpected runtime error")
    console.error("Global runtime error captured:", error)
    this.setState({ hasError: true, error })
  }

  private handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    if (this.state.hasError) return
    const error =
      event.reason instanceof Error
        ? event.reason
        : new Error(String(event.reason || "Unhandled promise rejection"))
    console.error("Unhandled promise rejection captured:", error)
    this.setState({ hasError: true, error })
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI or use the provided one
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#51080F] to-[#751A23] p-4">
          <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center">
            <div className="mb-4">
              <svg
                className="w-16 h-16 mx-auto text-[#751A23]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#51080F] mb-3">Oops! Something went wrong</h2>
            <p className="text-gray-600 mb-6">
              We encountered an unexpected error. Don't worry, your data is safe.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-[#751A23] hover:bg-[#751A23]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

